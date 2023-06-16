import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {

    const [navState, setNavState] = useState(false);
    const [path, setPath] = useState(window.location.pathname);

    let showNavCss = "fixed top-0 right-0 w-[250px] h-[100vh] z-[100] bg-second-color translate-[250px] duration-500 md:hidden";
    let NavCss = "fixed top-0 right-0 w-[250px] h-[100vh] z-[100] bg-second-color translate-x-[100%] duration-500 md:hidden";

    let nav =
        <nav className={navState ? showNavCss : NavCss}>
            <button onClick={() => setNavState(false)} className="text-white text-[25px] block mx-[15px] my-[10px]"><i className="fa-solid fa-xmark"></i></button>
            <div className="flex justify-start items-center flex-col space-y-2 pt-20">
                <Link to="/Project" className="text-white  hover:text-primary-color duration-500  px-1 py-2 text-sm font-medium border-b border-[#77777769] pb-[15px] text-center w-[80%]">Projects</Link>
                <Link to="/About" className="text-white hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium border-b border-[#77777769] pb-[15px] text-center w-[80%]">About</Link>
                <a href="/#Contact" className="text-white hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium">Contact</a>
            </div>
        </nav>
    let header1 =
        <header className="relative">
            <div className="mx-auto  px-2 sm:px-6 ">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-between sm:items-stretch z-10">
                        <Link to="/" className="text-[30px] font-semibold text-primary-color" onClick={() => setPath("")}>Falk</Link>
                        <div className="hidden sm:ml-6 md:block">
                            <div className="flex space-x-4">
                                <Link to="/Project" className="lg:text-white  hover:text-primary-color duration-500  px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("/Project")}>Projects</Link>
                                <Link to="/About" className="lg:text-white hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("")}>About</Link>
                                <Link to="/" className="lg:text-white hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("")}>Contact</Link>
                                <p className="lg:bg-white lg:text-[#000000] rounded-[50%] w-[25px] h-[25px] px-2 py-1 my-auto flex justify-center items-center md:bg-primary-color md:text-white">ln</p>
                            </div>
                        </div>
                        <button onClick={() => {
                            setNavState(true)
                        }} className="text-[25px] mr-[20px] md:hidden"><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
    let header2 =
        <header className="relative">
            <div className="mx-auto  px-2 sm:px-6 ">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-between sm:items-stretch z-10">
                        <Link to="/" className="text-[30px] font-semibold text-primary-color" onClick={() => setPath("")}>Falk</Link>
                        <div className="hidden sm:ml-6 md:block">
                            <div className="flex space-x-4">
                                <Link to="/Project" className="lg:text-second-color  hover:text-primary-color duration-500  px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("/Project")}>Projects</Link>
                                <Link to="/About" className="lg:text-second-color hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("")}>About</Link>
                                <Link to="" className="lg:text-second-color hover:text-primary-color  duration-500 px-1 py-2 text-sm font-medium md:text-second-color" onClick={() => setPath("")}>Contact</Link>
                                <p className="lg:bg-primary-color lg:text-white rounded-[50%] w-[25px] h-[25px] px-2 py-1 my-auto flex justify-center items-center md:bg-primary-color md:text-white">ln</p>
                            </div>
                        </div>
                        <button onClick={() => {
                            setNavState(true)
                        }} className="text-[25px] mr-[20px] md:hidden"><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
    return (
        <>
            {path === "/Project" ? header2 : header1}
            {nav}
        </>

    )
}


export default Header;
