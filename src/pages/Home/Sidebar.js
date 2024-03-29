import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SidebarLayout = () => {

    const menuList = [
        {
            subMenu: "HTML-CSS",
            menuItem: [
                {
                    name: "HTML cơ bản",
                    link: "/bai1"
                },
                {
                    name: "CSS cơ bản",
                    link: "/bai1"
                },
                {
                    name: "Bootstrap",
                    link: "/bai1"
                },
                {
                    name: "Responsive",
                    link: "/bai1"
                },
                {
                    name: "Chữa bài tập",
                    link: "/bai1"
                },
            ]
        },
        {
            subMenu: "Javascript",
            menuItem: [
                {
                    name: "Cú pháp cơ bản",
                    link: "/bai1"
                },
                {
                    name: "Xử lý dữ liệu với mảng",
                    link: "/bai1"
                },
                {
                    name: "Bắt sự kiện với DOM",
                    link: "/bai1"
                },
                {
                    name: "Call API",
                    link: "/bai1"
                },
                {
                    name: "Chữa bài tập - B1",
                    link: "/bai1"
                },
                {
                    name: "Chữa bài tập - B2",
                    link: "/bai1"
                },
                {
                    name: "Chữa bài tập - B3",
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
        },
        {
            subMenu: "Git cơ bản",
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

                <Sidebar backgroundColor="#BCD0BD" width="100%"  style={{minWidth: '200px'}}>
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