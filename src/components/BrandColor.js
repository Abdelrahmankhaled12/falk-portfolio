import image from "../images/Colors.png"

function BrandColor() {
    return (
        <div className="pt-12 pb-12">
            <p className="my-5 text-primary-color text-[25px] font-semibold">Colors</p>
            <img src={image} alt="" className="mx-auto" />
            <ul className="flex justify-center lg:space-x-[80px] font-semibold text-[#8E87FF] text-[10px] md:text-[20px] mt-5 md:space-x-[30px] space-x-[15px]">
                <li>Hex: 8E87FF </li>
                <li>Hex: B68FFF</li>
                <li>Hex: 84DBFF</li>
                <li>Hex: 54C2D7</li>
                <li>Hex: FFFFFF</li>
            </ul>
        </div>
    )
}

export default BrandColor;