import React from 'react';

const HomePage = React.lazy(()=>import('../pages/Home/Home'))
const PracticePage = React.lazy(()=>import('../pages/Practice/Practice'))
const CompilerPage = React.lazy(()=>import('../pages/Compiler/Compiler'))


const userRoutes = [
    { path: "/", component: <HomePage/> },
    { path: "/practice", component: <PracticePage/> },
    { path: "/compiler", component: <CompilerPage/> },

];

export { userRoutes };