import { Outlet, createBrowserRouter, Link } from "react-router-dom";
import HakerNews from "./components/HakerNews";
import TodoList from "./components/TodoList";
import HomePage from "./HomePage";
import "./root.css"
import Login from "./components/Login";
import Index from "./components/mainBoard";
import EditUserInformation from "./components/editUserInformation";

function RouterRoot() {
    return (
        <div>
            <div>
                {/* <Link to={"/todo"}>Todo         </Link>
                <Link to={"/hakernews"}>Haker News</Link> */}
            </div>
            <Outlet></Outlet>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot></RouterRoot>,
        children: [
            {
                //path:"/",     显示
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: "/todo",
                element: <TodoList></TodoList>
            },
            {
                path: "/hakernews",
                element: <HakerNews></HakerNews>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/index",
                element:<Index></Index>
            },
            {
                path:"/editUserInformation",
                element:<EditUserInformation></EditUserInformation>
            }
        ],
    },
]);

export default router;