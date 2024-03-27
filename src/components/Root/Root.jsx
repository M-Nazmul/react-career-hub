import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <>
        <div className="max-w-[1440px] mx-auto">
            <Header></Header>
        </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;