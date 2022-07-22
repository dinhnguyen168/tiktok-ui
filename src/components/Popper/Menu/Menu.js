import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "@/components/Popper/Popper";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import styles from "./Menu.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderMenu = (attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {history.length > 1 && <MenuHeader title={current.title} onBack={handleResetMenu} />}
                <div className={cx("menu-body")}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            delay={[0, 300]}
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderMenu}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
