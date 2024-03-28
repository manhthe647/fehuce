import React from "react";
import HeaderLayout from "../../Layout/Header";
import SidebarLayout from "./Sidebar";
import AlertInfo from "../../component/Alert";
import { MESSAGE } from '../../common/constants/message'
const Home = () => {
    document.title = "Lý thuyết - FeHuce"
    return (
       <React.Fragment>
          
           <div>
             <AlertInfo message = {MESSAGE.notification} />
           </div>
           <div>
            <SidebarLayout/>
             
           </div>
       </React.Fragment>
    );
}

export default Home;