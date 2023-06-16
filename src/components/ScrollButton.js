import { useState, useEffect } from "react";

function ScrollButton() {
    const [isButtonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400) {
                setButtonVisible(true);
            } else {
                setButtonVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button style={{ display: isButtonVisible ? "block" : "none" }} onClick={()=>{
            window.scrollTo({ top: 0, behavior: "smooth" });
        }} className="fixed block bottom-[5%] right-[50px] text-[30px] bg-second-color w-[40px] h-[40px] rounded-lg text-primary-color">
            <i className="fa-solid fa-angle-up relative top-[-2px]"></i>
        </button>
    );
}

export default ScrollButton;