import UpdateOne from "../components/Pages/UpdateOne";

const { createBrowserRouter } = require("react-router-dom");
const { default: Create } = require("../components/Pages/Create");
const { default: Delete } = require("../components/Pages/Delete");
const { default: Home } = require("../components/Pages/Home");
const { default: Read } = require("../components/Pages/Read");
const { default: Update } = require("../components/Pages/Update");
const { default: Main } = require("../layout/Main");

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/create',
                element: <Create></Create>
            },
            {
                path:'/read',
                element: <Read></Read>,
                loader: () => fetch('http://localhost:5000/usercomments')
            },
            {
                path:'/update',
                element: <Update></Update>,
                loader: () => fetch('http://localhost:5000/usercomments')
            },
            {
                path:'/update/:id',
                element: <UpdateOne></UpdateOne>,
                loader: ({params}) => fetch(`http://localhost:5000/comment/${params.id}`)
            },
            {
                path:'/delete',
                element: <Delete></Delete>,
                loader: () => fetch('http://localhost:5000/usercomments')
            }
        ]
    },
    {
        path:'*',
        element: <div>this is error page</div>
    }
])

export default routes;