import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SidebarLayout = () => {

    const menuList = [
        {
            subMenu: "Luyện tập HTML-CSS",
            menuItem: [
                {
                    name: "Luyện tập 1",
                    link: "/bai1"
                },
                {
                    name: "Luyện tập 2",
                    link: "/bai1"
                },
                {
                    name: "Luyện tập 3",
                    link: "/bai1"
                },
                {
                    name: "Luyện tập 4",
                    link: "/bai1"
                },
                {
                    name: "Luyện tập 5",
                    link: "/bai1"
                }
            ]
        },
        {
            subMenu: "Luyện tập Javascript",
            menuItem: [
                {
                    name: "JavaScript - B1",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B2",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B3",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B4",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B5",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B6",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B7",
                    link: "/bai1"
                },
                {
                    name: "JavaScript - B8",
                    link: "/bai1"
                },
            ]
        },
        {
            subMenu: "ReactJs",
            menuItem: [
                {
                    name: "Chưa có",
                    link: "/bai1"
                }
            ]
        }
    ]


    return (
        <React.Fragment>
            <div className="pe-2">

                <Sidebar backgroundColor="#BCD0BD" width="100%" style={{minWidth: '200px'}}>
                    <Menu>
                        {menuList.map((item, key) => (
                            <SubMenu key={key} label={item.subMenu}>
                                {item.menuItem.map((menuItem, index) => (
                                    <MenuItem key={index} font>{menuItem.name}</MenuItem>
                                ))}
                            </SubMenu>
                        ))}

                    </Menu>
                </Sidebar>;

            </div>
        </React.Fragment>
    );
}

export default SidebarLayout;