import { Link } from "react-router-dom";
import image from "../images/Rectangle 86.png"

function LandingAbout() {
    return (
        <div className="pt-10 pb-10 relative overvlow-hidden">
            <div className="container">
                <div className=" grid gird-cols-1 lg:grid-cols-2">
                    <div>
                        <img src={image} alt="" className="mx-auto lg:mr-auto lg:ml-[0] mb-[65px]" />
                    </div>
                    <div className="relative z-10 leading-[1.2] pt-10">
                        <p className="text-white text-[25px] font-semibold">What I am all</p>
                        <h1 className="text-primary-color text-[70px] font-semibold">About</h1>
                        <p className="text-white text-[18px] font-semibold mt-5 leading-[1.8]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    </div>
                    <div className="bg-second-color absolute  lg:h-[150%] lg:w-[80%]  lg:top-[-50%] lg:right-[-25%] w-[100%] h-[39%] md:h-[35%]  bottom-[0px] right-[0px]  flex justify-start">
                    </div>
                </div>
                <Link to="/" className="fixed top-[45%] left-[2%] text-[35px] hidden lg:block"><i className="fa-solid fa-chevron-left"></i></Link>
            </div>
        </div>
    )
}


export default LandingAbout;