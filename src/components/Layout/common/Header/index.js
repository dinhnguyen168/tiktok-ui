import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "@/assets/images";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "de",
                    title: "Deutsch",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change languge#
                console.log(menuItem);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View Profile",
            to: "/@hoaa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get Coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/*Logo*/}
                <img src={images.rootmap} alt="Tiktok" />

                {/*Search*/}
                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload Video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFBgWFhUZGBYZHB0ZGBoaGh0ZHxocHB8aHCQcGBocIy8lHiMrHxkcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjErJCUxNDQ0NDQ0OjQxMTQ0NDQxPTExMTg0Oz80NDQ0NDQ0NjQ0NDE0NDQ0NDQ0NDQ0NDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABEEAACAQIEAwQHBQYDBwUAAAABAgADEQQSITEFQVEGImFxBxMygZGhwUJSgrHRFDVicpLwI7PhM3N0orLx8hUkNFNj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAeEQEBAAIDAQADAAAAAAAAAAAAAQIRAyExEjJBYf/aAAwDAQACEQMRAD8A67ERNoREQEREBERAREQETCxnF8PSUtUr00VWyMWdQAx1ym50Nje0w8Z2pwdKstCpiaa1WtZSeu2ZvZW/K5G8g3MTXYfjeGes1BK9N6y3zIrgsLb6Dpz6TYyhEjXavtnhsCtnbPWNstFCMxvza/sLpufnIZhfSdi8TiFp4TBI1wTkd++wUXYh7qq/OTY6xExeG4o1aSVGpvTZhdkqCzIdip9435ixmVAREShERAREQEReLwEREBERAREQEREBERAREQEExOI+lvh9T1rV2xiVMOxHq6BqnMjCysKdPVTYm5OhGa3S8o2fbTshg62LruvEKVHEFS70amUgMFBN2uCoKi5FiRcnbSQCtwJVwbYlcRQbLVFNqSN3rEHvd8AkkjYD2QTyM07MzkuzZixuWe7Mx6sSZaJYG5UG2xEisvh3EXoVFq0mNKohOV8oNswKnQgjUE7yZdkO2uLpVqrVKtTEKaNWoUqOWGZELgrf2R3SCBpYnTSQZKgYWItfz+Rh1spGa3Qk/K/x+MDL4jjalaq9ZyDVquWY7C7HQC50UbC50Akzq8Vp8JqU0wa4fE1vV5q2JYs+YuzHIgR8qABR1J0kBRrjvW7p+m8q7raA/A/pAkNDttj1WooxlQmpq5Y5mQk3JpE+xpp3dBytMzgfbDiOFCqjGqtcBqa1c1e+pF0ytmDaaqfA2kR9SvMX8TNh2d41WwlZa1CysAQwYXVwRazKCL667jaB3vsL2oOOoZnptTqp3andYIW11Rm32uVvdb2PUyeQDgHpQw9Y4elUR0r1SEbKt0Rycq94m9mNrWBtfWTmjikcsEdHKGzhWDFT0YA6HwMqL0REoREQEREBERAREQEREBERAREQERNfxri1LC0Wr1myotgbAsSSbBVA3JMDknavtJxoO9I06lNaTO3rKFJ7OlzlZm1UrlP66iczzqt9CGtaxH5yXdqe3uJrV6xp4islBjlSmCF7lgO8F2J11vfWRWiBe4UjzmVeYfDvUB1sBzNlA8ybTKOHCKAWLPuQACovyzX10lFO7HKOvM2GnP3ay6KKF1XOpBNja4I62uOkDFzMzZUXMedtYemx9tLX28JkviQLhECX+6SDYa6m/lPDXY+0S1+pJ2gWMLgd2f2BfYgFrW0A33I15SupiEAslPKvX2jfrm3t7pkuECqxS+a+mYi1jbu/63mPjlyMQNRcb9GF9fcYFm4bQNpzEo9WVvlPmD9JcqU9QRa4+c8NMNqRY7QFN3SzEkFSGBU5WUjUMpGxB6ST4UUOHYijUq3xNZQtV0pVQiUyTmVWcZjVYWDEd1b2FzrIo6lRuCOYIkj7EVKC4ylVr1adGlTbM2YMS+hACqqnQ31JtpeB9FcMx616KVkJKVFV1vobML2I68plTF4bWpNSVqDI1IjulLZLdFy6DXlMqVCIiUIiICIiAiIgIiICIiAiIgJD/SfwyricF6qhTapUNVCqiwtlzEsSxAAtpc9ZMIgfNHazhFHBJRw5UnGqM+JZWJQB7sqAE+0FK3IFvOaNqoK3HUDyvJz6XMThquPHqu9URfV1yBpnU6a7MQDlNtrAeXPqlUNYAWF/70mVZTWVegntPDhUVydWBPkL23mw7O8PFbFIrKWprcvvYWBIv5m2nOYWJKlnFMn1OY5Q32QdyQNQB8dJnfemvnrbAUEt3Sff0mU9SzC+xHzmRx/hTYarZb5CFKvybujNY/zX08pkcG4WcS5pl1RguYXF8xHIAcuusbmtnzd6/axjbmkuXvBbsxvqpJHLpoNfGW/23MhDagWAuBdbePS3KW0qZbqNwGBHTcGV4rB+rCBtVqIKittcHl4EHT4dZdppi5SrZtl8P0l9Kyk2Big4BQODlBVm2N1BF7a72voZsu1uAp0cSpQWR1DgDZbkiwHIaXt4yb70vz1trHZSCCfCZHBcD6/EUaHrQq1KiU81tVzG3x5CYrZTra/In9ZN/RJhcO/Eb1iA6Lmw6G4DVBqWHIlVuQD1vymmXaeAcAoYOmaeHVkQtmyl2fvEAEjMTa9htNpETSEREBERAREQEREBERAREQEREBLGNpM9N0VsrMrKrD7JZSA3uJvL8QOH8L9D2IqUg9XELRqMTdMhewvuzBhqd7W98gfaLgNbBVzRrgBwAwKsGDKbgMDvyO4B02n1TVqKilmYKqglmJsABqSSdhOHek+rhcZjcK9CulRXAo1Mh1Wzkg2PUObHbuzN1Fm60vYKkwruSGVfVBjfQd4qVJ63FyD5xX4CtTFE0ayNTZs73dDYliSoVTdtPAb7yWY/hC1VWnmZKQABRLAsF0ALG+gHL5zU4jsPh2HdZ0PXMGHvBH1nP9ze9uq8dk1rem84lwqlXULUS6qbrYlSOWhHhIVw/AvhOIIDTJR3ZaZvcZW0zA9VU638Znng/EMP/scR61R9knXyCvcfAzfcDqvVQVK9LJWUsmqkaaG6g7A6bb2mZfme7i2fVnWqg/a7AGjiGYlStYllA0IFx7QG3S431kxq8OGKwtJGBogqrZVUEgAbDNsNvgI7RUQmXEJSNSuncQWLDW4uyjU2uTpbeaheH8RxH+1repU8hofguvxM1v6k78T5+crNb2t43sfh1a/7V6u4AAcrct1vcbnW1p72x4Q7YenWLh2pIFqH7wJFmFvE/AzKw/YagNXeozczcKL9bWJ+c2+D4KqU2o52egwIytqUvuFYW08LaGT61Zd7X43LNa3/AFAOyXZ2tj6poUcosMzMxsEW4F9NTckCwEklX0YcRp+rChHdmsCjG1ILYh2cgW1OgFzp7psfRPjsNg6mKbEV1Q3Wkl7kkKzFmIANl9nU6bztiVAwDKQVIBBBuCDqCCNxOmduS7hTUhQCbkAAnqQN/fKoiaQiIgIiICIiAiIgIiICIiAiIgIiIET9JDH9kRPs1K9Km/imYsVPgcgHvnOuO1bhLotkq0yjAarZ108Li+06h26wDVcFUCC70ytZBzLUmD5R4kAj3zm+Py1MPUK650zofIZh8xOfl9ldPBqyxt3wzVGRFqGmHdVd1ClgpNu7mBA1I16XkY7VYQYPG1aT1cZVppQDpaqFZqjEWJIWwQd69hfSSTC1g6I/J1DfESvitFMQq+uBLoMqVUbJUCnXKzEMrL4Mp85jDLGdV6cuGV7xqD9kcdjq1anSQip6zOFFQ2vkQubPa40FgTcXMnFJyRcqynUMrCzKwNirDqCCPdK+CKmFJempaqRl9ZVbOyrvlQKFVRtey621leIrMzMzG7MbsbAXNgOXgAPdJncb4cWOU/JZquFUsb2A5AknwAGpJ2AG8jXHsbXo13TEipSQURUVMOUz3Y2UVHYEKNDmKg2213kppuVYMN1IYHexBuDr0Mq42y4sKayf4iAhKtM5HAO6m4ZWXnYr5WjC4z05Mcr+LnnY2jXxOMw9KpiMQqVi4ulQ5hkQtcZri1wOXWT9sC1CrUpGq9VVYBHcLmtlW4JUAGzFhtylrhOGTDlnpBjVYFTVdgzqp3WmAqqt+oW/jKcdXyU3c/ZVm+AJ/OXPLG9ROPDKd5Vpuz1TuWCKFd3LG2r5nb5WsNb7To3o5cnBBCbinVrU0/lR2CjyA090gGGZaNBC21KmGc9Wte3mW/OdO7G8OahgqKOLOVLuOj1GLsPcWt7pvi9tY59SSN3EROhzEREBERAREQEREBERAREQEREBERATmvaDs6+GZ3p02qYRyXKICz4dm1bKg1amTrYarc6WnSomcsZlNVrHK43ccY7MVAaGUG4RmQeQJtofC03Er47hfU8RrDZcQq10/mUZHA94VvxSicec1lY7sMvrGUlrDYhXLDMAykjKd9Dbbx3ltMWuzHI2vdbQ+Y6jylGIRH+1ZuTDQ/GZaXa+JVCASMxIAXnqbXt4b+6X5h4akiHRrsd2JufjMl6gFrkC5sPEnpArmm7T1LUlQ3s7ohsCTluCbAanQHQTcy72ew3reI0+a4ZHqt4O/cQfDOfdNYTeUjPJl842rnZvs4+IqJVrU2pYemwenTcWaqw1V6i/ZVdwp1JAvYDXo0ROzHGYzUcOWVyu6RETTJERAREQEREBERAREQEREBERAREQERECN9tOCtiKKvSH/uKBL0xtnBFnpk9GX5hZDMHilqIHW/Qg6FWGhVhyIOhE6vOP9u+N4Wniy2EJfEZsuJVAPVNbTvNyqDa632IOonjy4b7nr24eT56vjNrUwwsQD5i4+E1FVFT2qTKfvU9j8LH4iZ2A4klXQXVwLsjjK4v4HceI0maZzeOzq9xpKKK5sqOT1YlQPPX8hNpQwqJqFGbrufidZfAmDxHiaUhY3Z7XFNRdiBzsNh4nSO74XU7q9jcUtNCzXOwVRqzsdAijmSdLSa9jeCth6LNVt+0Vm9ZVtqF0sqA9EXTzuecgPYPjmFfFZsWSuIvlwwe3qlB07jf/AGHa7W3sN52CdPFhru+uPm5Pq6nhERPZ4kREBERAREQEREBERAREQEREBERAREQERIn217bUuHgLlNXEOLpTU2su2Z21stwQNLmx8TAlk4l2+4c2B4kK1JFKYkNUUNoBUAs4U20JuGv/ABTF4j6QOI1tqi4dPu0kBa3iz3N/EWkYxStUOapUqO/J3dnYf1GZtG7x/Fc6hqmGqBypam6EOQQWXMHUhgMyke6VUOPlUW+JYNYZhVw7NY21AZbXF+s07uoVLAhwrZ25El2Iy9NGG89FVvvH4mYuMvr0xzuPjaYztAzI2XEktburToMt/N3uR7pVg+O4ekrsqVEqAAjMLVKhJsLMSSdZqGc8z8TPfUl6TsEXuugzm90zCoLKNtSL/hETGTwyzuXqQ9ieEHiOPL1ERaNAq9RV1Dt9lCdjcgltLd09Z3efMGHo5CGps9Nx9tHZW+IMlfCvSHj8OLOy4lByqDK48nXf8V5uV5u6RIj2L7dUMfdAppV1GY02N7gaFkbTMAd9AR0kumgiIgIiICIiAiIgIiICIiAiIgIiICIiB4zAAkmwGpPQCfN/F+JnFYmtiWJIqOcl792mvdUWO3dAv4ztvpD4iaHDcS49pk9Wtt81QhLjyDE+6cCYZE0+yv5TNIvxPAZ7Iqlvp9VgqOkN9Pqs9geBR0hfoPruPefjPZ4PoPrAqiJSzWF4FzDY18PVp4in7dFww5Zl2ZSehUkHzn0nhsQrojobo6q6nqrAEH4GfMy95RfmNfeJ2/0W481eG0QTdqRai34D3f8AkKSxKl8RE0EREBERAREQEREBERAREQEREBERA5t6RAuIx2HwzXKU6T13W5ALMQik25ixI85z/j3AXpK5UF0ymzAajQ+0B+e0nGPqGpxTGvyQUqCHyXM3/MZcFnTwYEH36GTW45c+XLHPrxyrCPdB5eP6S9m/u4/WY2BBUFTupKnzUkTKmXW8IPQ/A9R+k3FLG4YUwrUGLhXGcO63Zj3CVtayjSw35zT5R0E9ywNti8Zh2V8lAoWKlO+7ZBrmFivevpvtNQPI7DkZ7aeZR0hbdhP96D85jY+pZD46b/pMoCWvVZ6tJLXzuqkeBYX+Qhm3U22PCuFPWsEFlFgXPsj9T4CT/wBH9P8AZse+GVmNOtQ9bYnT1quAzBdgSDy6DpLuijYBQNhoAJiUqmTiGAqXtd2pN4+tQgA/iE1rUc2PNcs5P06tERK6SIiAiIgIiICIiAiIgIiICIiAiJj8Qxi0aT1nvlpoztbU5UBY2HM2EDj3/qiUcfjqbtcNiHYOeRa11boF2B8JuqOhIGqt3lI213t/fOc1r1/WVKtXUetqPVsdwHYsAfGxEyMJj6lM3RyvhuP6TpJK8OTg+ruVicQp5MVXXpUY+5tfrPSZi43FmpXdmILMFvbQXUZdvcJcqG4W/wB5Qf6hpMvaSyTa8DEsrQ09pv6ifkYFPlnMNL2YdYvLQoD7zf1GDh15gHUbgGBdBmT2bp58bT6IGY+5co+ZE19Fu4COY0lzgnFPUV2YBSxXIua9tSDy8hLGc5bjZHT6+tl66nyH6mabiuOR8RhKKMM/7VROb7KkNzI3J2tIni8U9Ry7sST8B4AchLAqlGSoBdqTpUA2uUIa1+W0trww4Pmy2vpsxMXheOWvRp1l0WoiuoO4DAGx8Re0ypXQREQEREBERAREQEREBERAREQEifpQxRTheJI3cIg/G6qfkTJZID6ZHYYBABcHEUw3gO+fzAko5EosLT2ImVanDi9Z/P6zOxa3CqNCzCx8tb/ITF4et3dv4j+Z/WZQN6yjop+J/wC0D3FXzk075LCwfKzXyi9yAL969vC0xkLgna5/hP6zOZTy0lOc8x8IGMM5/wDFfqIKVOvyT9JmAz0QMfCKMtvukj5yhMMpSpUscyYiggP8LrWJ+dMSrDGzOP4voJeSqBTxSnmKNUeaVAn5VTArnhE9nkDtXopxRfhlEE3KF6Z/C7WH9JWTGc59Cbk4PED7IxD5felMkfl8Z0aaiEREoREQEREBERAREQEREBERATm3ppq1Bh8OoH+C1X/EI+8FugPgTmPmBOkyA+lvhFevhkekSyUGZ6tPNlDqBfPruVyk26MZKOQIwMVHCi5ltXdgGAABFxK6GDrYh1w9NC1SpooHTmzHkoGpJmVYnCj3fefzl7EUCWzKbHaVYohq9VkICmo5XLtlDECw8gJX3uoPygYwrVR9q/mD9DKjin+6Pif0l/M3QfH/AEnuc/d+YgYgxb9PjaVDFVTsFHkCfpMnOfu/MTzM3QfH/SBZw1FgSzHU7yqnQqVKjLTBJNKqSAL3VEznT8MuHN1A915JfRW6pxRA2vrKdRFv96wbTzCsIEZoVAyg+Eqc+BMv8a4XVwmIfDsmUhmZDpZqZY5WU9OUxLONbg/35QOmehP1hOLO1DMlh/8ArY5sv4bX906rOa+h7gToj4xyFXEKopopv3VJu7cs19B0F+s6VNRCIiUIiICIiAiIgIiICIiAiIgJp+2H7vxn/D1/8t4iB87YT2E/lH5SW+jP960f93V/6YiYVBcV/wDKqfzN+c2QiID9Y/UfSIgDzg84iAaZ3o9/fGF/nf8A6HnkQJN6Xf3lT/4Yf5jyGmIlo7d6LP3Vhv5X/wAypJbESxCIiUIiICIiAiIgf//Z"
                                className={cx("user-avatar")}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
