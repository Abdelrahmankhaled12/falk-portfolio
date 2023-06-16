
import myCV from "../cv/ReactResumeDownload.pdf"

function LandingHome() {
    return (
        <div className="pt-10 pb-10 relative overvlow-hidden">
            <div className="container">
                <div className=" grid gird-cols-1 lg:grid-cols-2">
                    <div>
                        <h1 className="text-[55px] text-primary-color font-semibold leading-[1.2]">Hi there, Welcome to my portfolio!</h1>
                        <p className="text-[18px] mt-5 mb-5 text-second-color font-semibold ">I am building digital experiences that drive convertible traffic.</p>
                        <div>
                            <button onClick={() => window.open(myCV)} className="bg-second-color hover:scale-125 hover:me-10   duration-500  border border-solid border-second-color text-white rounded-lg w-[160px] py-2.5 me-3 font-semibold">Download CV</button>
                            <a href="#Contact" className="inline-block text-center bg-white border hover:bg-second-color hover:text-white duration-500 border-solid border-second-color text-second-color rounded-lg py-2.5 w-[160px] font-semibold">Let's talk!</a>
                        </div>
                    </div>
                    <div className="z-20 text-center lg:block lg:text-end flex space-x-10 mt-10 lg:mt-[0]">
                        <div className="mb-5">
                            <h2 className="text-primary-color text-[50px] font-semibold">10+</h2>
                            <p className="lg:text-white text-second-color text-[20px] font-semibold italic">Skillsets</p>
                        </div>
                        <div className="mb-5">
                            <h2 className="text-primary-color text-[50px] font-semibold">20+</h2>
                            <p className="lg:text-white text-second-color text-[20px] font-semibold italic">Tools</p>
                        </div>
                    </div>
                    <div className="bg-second-color absolute lg:h-[250%] hidden lg:block w-[70%] lg:rounded-[50%] md:rounded-[0] top-[-50%] right-[-25%]">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHome;