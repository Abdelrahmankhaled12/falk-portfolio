
import { Link } from "react-router-dom";
import useHover from "./HoverButton";

function Card(props) {
    const [isHovered, handleMouseOver, handleMouseOut] = useHover();
    return (
        <div className={props.clas}>
            <div className="border-b-2 rounded-t-[15px] px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 bg-second-color text-white h-[250px] flex justify-center items-center text-[30px] " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {isHovered ? props.textHover : props.text}
            </div>
            <div className="p-6 text-start rounded-b-[15px] bg-[#EAEAEA]">
                <Link to={"/Project"} className="text-[15px] bg-primary-color rounded-lg py-3 px-[20px] text-white font-semibold">
                    View Project <i className="fa-solid fa-chevron-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default Card;