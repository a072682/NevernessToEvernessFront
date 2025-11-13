

import { createHashRouter } from 'react-router-dom';
import FrontLayout from '../layouts/FrontLayout';
import IndexPage from '../pages/IndexPage';
import NotFound from '../pages/NotFound';
import Page0 from '../pages/Page0';
import Page1 from '../pages/Page1';




const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
			{
                path: "",
                element: <IndexPage />,
            },
			{
                path: "Page0",
                element: <Page0 />,
            },
            {
                path: "Page1",
                element: <Page1 />,
            },
        ]
	},
    {
        path: "*",
        element: <NotFound />,
    }
])
export default router;