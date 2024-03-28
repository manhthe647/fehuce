import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { userRoutes } from "./allRoutes";
import Layout from "../Layout";

const Loader = () => {
    return (
        <div class="load">
        <hr/><hr/><hr/><hr/>
      </div>
    );
  };

const Index = () => {
    return (
        <React.Fragment>
            <Suspense fallback={Loader()}>
                <Routes>
                    {userRoutes.map((route, idx) => (
                        <Route path={route.path} element={<Layout>{route.component}</Layout>} key={idx} exact={true} />
                    ))}
                </Routes>
            </Suspense>
        </React.Fragment>
    );
};

export default Index;