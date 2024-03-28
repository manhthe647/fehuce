import React from "react";
import HeaderLayout from "./Header";

const Layout = (props) => {
    return (
        <React.Fragment>
            <HeaderLayout />
            <div className="main-content">
                <div className="page-content">{props.children}</div>
            </div>
        </React.Fragment>
    );
}

export default Layout;