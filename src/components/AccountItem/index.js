import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/8a002e8ece46f36f4a89e27c2c8e15f4~c5_300x300.webp?x-expires=1655334000&x-signature=tpb4c1mOhZ1wRMabFx9sUp9pYg8%3D"
                alt="Hoaa"
            ></img>
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
