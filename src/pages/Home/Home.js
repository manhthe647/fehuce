import React from "react";
import HeaderLayout from "../../Layout/Header";
import SidebarLayout from "./Sidebar";
import AlertInfo from "../../component/Alert";
import { MESSAGE } from '../../common/constants/message'
import Content from "./Content";

const Home = () => {
  document.title = "Lý thuyết - FeHuce"
  return (
    <React.Fragment>

      <div>
        <AlertInfo message={MESSAGE.notification} />
      </div>
      <div className="row p-0 m-0">
        <div className="col-md-3 p-0">
          <SidebarLayout />
        </div>
        <div className="col-md-9 p-0">
          <Content />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;