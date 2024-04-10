import React from 'react';

const HomePage = React.lazy(()=>import('../pages/Home/Home'))
// const LookupPage = React.lazy(()=>import('../pages/Lookup/Lookup'))
const ExamPage = React.lazy(()=>import('../pages/Exam/Exam'))

const HtmlCss1Page = React.lazy(()=>import('../pages/Home/Content/HtmlCss/HtmlCss1'))
const HtmlCss2Page = React.lazy(()=>import('../pages/Home/Content/HtmlCss/HtmlCss2'))
const HtmlCss3Page = React.lazy(()=>import('../pages/Home/Content/HtmlCss/HtmlCss3'))
const HtmlCss4Page = React.lazy(()=>import('../pages/Home/Content/HtmlCss/HtmlCss4'))
const HtmlCss5Page = React.lazy(()=>import('../pages/Home/Content/HtmlCss/HtmlCss5'))
//js
const Js1Page = React.lazy(()=>import('../pages/Home/Content/Js/JsLearn1'))


const userRoutes = [
    { path: "/exam", component: <ExamPage/> },
    // { path: "/lookup", component: <LookupPage/> },
];

const homeRoutes = [
    { path: "/", component: <HtmlCss1Page/>},
    { path: "/htmlcss/1", component: <HtmlCss1Page/>},
    { path: "/htmlcss/2", component: <HtmlCss2Page/>},
    { path: "/htmlcss/3", component: <HtmlCss3Page/>},
    { path: "/htmlcss/4", component: <HtmlCss4Page/>},
    { path: "/htmlcss/5", component: <HtmlCss5Page/>},
    { path: "/js/1", component: <Js1Page/>},

];

export { userRoutes, homeRoutes };