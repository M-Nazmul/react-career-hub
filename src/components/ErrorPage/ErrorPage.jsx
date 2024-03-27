import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h2 className="text-4xl font-bold">Oops!!</h2>
            <p className="text-3xl">Page not found</p>
            <div className=" px-4 ">
                    <img className="rounded-lg my-10" src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />    
            </div>
                    <NavLink to={"/"}><button className="border px-4 py-2 rounded-md">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;