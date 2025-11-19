import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";

function FrontLayout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default FrontLayout;