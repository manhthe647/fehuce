import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { userRoutes, homeRoutes } from "./allRoutes";
import Layout from "../Layout";
import Home from "../pages/Home/Home";

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
                    <Route>
                    {userRoutes.map((route, idx) => (
                        <Route path={route.path} element={<Layout>{route.component}</Layout>} key={idx} exact={true} />
                    ))}
                    </Route>
                    <Route>
                    {homeRoutes.map((route, idx) => (
                        <Route path={route.path} element={<Layout><Home>{route.component}</Home></Layout>} key={idx} exact={true} />
                    ))}
                    </Route>
                  
                </Routes>
            </Suspense>
        </React.Fragment>
    );
};

export default Index;