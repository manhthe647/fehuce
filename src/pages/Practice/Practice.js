import React from "react";
import HeaderLayout from "../../Layout/Header";
import SidebarLayout from "./Sidebar";
import AlertInfo from "../../component/Alert";
import { MESSAGE } from '../../common/constants/message'
const Practice = () => {
    document.title = "Bài tập - FeHuce"
    return (
       <React.Fragment>
           <div>
             <AlertInfo message = {MESSAGE.practiceMessage} />
           </div>
           <div>
            <SidebarLayout/>
             
           </div>
       </React.Fragment>
    );
}

export default Practice;