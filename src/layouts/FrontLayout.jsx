import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import ModalRoot from "../components/common/ModalRoot/ModalRoot";


function FrontLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <ModalRoot />
        </>
    )
}
export default FrontLayout;