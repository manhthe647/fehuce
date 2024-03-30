import React from "react";
import AlertInfo from "../../component/Alert";
import { MESSAGE } from '../../common/constants/message'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Home = ({children}) => {
  document.title = "Lý thuyết - FeHuce"

  const menuList = [
    {
      subMenu: "HTML-CSS",
      menuItem: [
        {
          name: "Lý thuyết 1",
          link: "/htmlcss/1"
        },
        {
          name: "Thực hành 1",
          link: "/htmlcss/2"
        }
      ]
    },
    {
      subMenu: "Javascript",
      menuItem: [
        {
          name: "Chưa có",
          link: ""
        }
      ]
    },
    {
      subMenu: "Git cơ bản",
      menuItem: [
        {
          name: "Chưa có",
          link: ""
        }
      ]
    },
    {
      subMenu: "ReactJs",
      menuItem: [
        {
          name: "Chưa có",
          link: ""
        }
      ]
    }
  ]

   const handleChangePath = (link) => {
      const currentPath = window.location.pathname;
      const newPath = `${currentPath}/${link}`;
      window.location.href = newPath;
   }

  return (
    <React.Fragment>
      <div>
        <AlertInfo message={MESSAGE.notification} />
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-3 p-0">
          <div className="pe-2">

            <Sidebar backgroundColor="#BCD0BD" width="100%" style={{ minWidth: '200px' }}>
              <Menu>
                {menuList.map((item, key) => (
                  <SubMenu key={key} label={item.subMenu}>
                    {item.menuItem.map((menuItem, index) => (
                      <MenuItem key={index} font onClick={()=> handleChangePath(menuItem.link)}>{menuItem.name}</MenuItem>
                    ))}
                  </SubMenu>
                ))}

              </Menu>
            </Sidebar>;

          </div>

        </div>
        <div className="col-md-9 p-0">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;