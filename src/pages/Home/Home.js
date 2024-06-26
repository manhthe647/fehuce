import React from "react";
import AlertInfo from "../../component/Alert";
import { MESSAGE } from '../../common/constants/message'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

const Home = ({children}) => {
  document.title = "Lý thuyết - FeHuce"
  // const urlClient = "https://fehuce.netlify.app/";
  const urlClient = "http://localhost:3000/";
  const menuList = [
    {
      subMenu: "HTML-CSS",
      menuItem: [
        {
          name: "Lý thuyết 1",
          link: "/htmlcss/1"
        },
        {
          name: "BTVN 1",
          link: "/htmlcss/2"
        },
        {
          name: "Lý thuyết 2",
          link: "/htmlcss/3"
        }
        ,
        {
          name: "BTVN 2",
          link: "/htmlcss/4"
        },
        {
          name: "TH Tạo LandingPage",
          link: "/htmlcss/5"
        }
      ]
    },
    {
      subMenu: "Javascript",
      menuItem: [
        {
          name: "Buổi 1",
          link: "/js/1"
        },
        {
          name: "Buổi 2",
          link: "/js/2"
        },
        {
          name: "Buổi 3",
          link: "/js/3"
        }
      ]
    },
    {
      subMenu: "Bootstrap 5",
      menuItem: [
        {
          name: "Buổi 1",
          link: "/bootstrap/1"
        }
      ]
    },
    {
      subMenu: "Git cơ bản",
      menuItem: [
        {
          name: "Buổi 1",
          link: "/git/1"
        }
      ]
    },
    {
      subMenu: "ReactJs",
      menuItem: [
        {
          name: "Chưa có",
          link: "/"
        }
      ]
    }
  ]

  const navigate = useNavigate();

  const handleChangePath = (link) => {
    
    navigate(link);
  };

  return (
    <React.Fragment>
      <div>
        <AlertInfo message={MESSAGE.notification} />
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-4 p-0 me-4">
          <div className="pe-2">

            <Sidebar backgroundColor="#BCD0BD" width="84%" style={{ minWidth: '200px' }}>
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
        <div className="col-md-7 p-0 ">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;