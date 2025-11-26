

import { createHashRouter } from 'react-router-dom';
import FrontLayout from '../layouts/FrontLayout';
import IndexPage from '../pages/index/IndexPage';
import CharacterPage from '../pages/character/CharacterPage';
import InformationPage from '../pages/information/InformationPage';
import WorldPage from '../pages/world/WorldPage';
import CityPage from '../pages/city/CityPage';
import NotFound from '../pages/NotFound';
import Page0 from '../pages/Page0';
import Page1 from '../pages/Page1';
import ReservePage from '../pages/reserve/reservePage';









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
                path: "character",
                element: <CharacterPage />,
            },
            {
                path: "information",
                element: <InformationPage />,
            },
            {
                path: "world",
                element: <WorldPage />,
            },
            {
                path: "city",
                element: <CityPage />,
            },
            {
                path: "reserve",
                element: <ReservePage />,
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