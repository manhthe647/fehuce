import React from 'react';

const HomePage = React.lazy(()=>import('../pages/Home/Home'))
const PracticePage = React.lazy(()=>import('../pages/Practice/Practice'))
const ChatbotPage = React.lazy(()=>import('../pages/ChatGPT/ChatGpt'))


const userRoutes = [
    { path: "/", component: <HomePage/> },
    { path: "/practice", component: <PracticePage/> },
    { path: "/chatgpt", component: <ChatbotPage/> },

];

export { userRoutes };