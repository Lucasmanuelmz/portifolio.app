import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Contact from "./Contact";
import AboutMe from "./About";
import MyHability from "./Hability";
import MyProjects from "./Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'about',
        element: <AboutMe/>
    },
    {
        path: 'hability',
        element: <MyHability/>
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: 'project',
        element: <MyProjects/>
    }
   
])

export default router;