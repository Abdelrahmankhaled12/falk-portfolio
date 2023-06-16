import image1 from "../images/inspiration 1.png"
import image2 from "../images/curve 1.png"
import image3 from "../images/speak 1.png"
import DropdownMenu from "./hooks/DropdownMenu";


function Services() {
    const options = [
        { label: 'Brand Identity', value: 1 },
        { label: 'Graphic Design', value: 2 },
        { label: 'Web Design', value: 3 },
        { label: 'HTML/CSS', value: 4 },
        { label: 'Ad Creative Design', value: 5 },
    ];

    const options2 = [
        { label: 'Adobe Suite', value: 1 },
        { label: 'Figma', value: 2 },
        { label: 'Blender', value: 3 },
    ];

    return (
        <div className="bg-second-color text-white pt-10 pb-10">
            <div className="container">
                <div className="text-center">
                    <p className="text-[18px]">What I Offer</p>
                    <h1 className="text-[40px]">Services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5  mt-3">
                    <div className="box bg-white p-9 text-center text-primary-color text-[30px] rounded-[20px] font-bold hover:text-white hover:bg-primary-color duration-500">
                        <img src={image1} alt="" className="mx-auto" />
                        <p className="mt-5">Web and graphic design</p>
                    </div>
                    <div className="box bg-white p-9 text-center text-primary-color text-[30px] rounded-[20px] font-bold hover:text-white hover:bg-primary-color duration-500">
                        <img src={image2} alt="" className="mx-auto" />
                        <p className="mt-5">UX/UI</p>
                    </div>
                    <div className="box bg-white text-center text-primary-color text-[30px] rounded-[20px] font-bold p-9 hover:text-white hover:bg-primary-color duration-500">
                        <img src={image3} alt="" className="mx-auto" />
                        <p className="mt-5">Marketing</p>
                    </div>
                </div>
                <DropdownMenu nameButton="Skillsets I breathe" options={options}/>
                <DropdownMenu nameButton="Tools I love" options={options2}/>
            </div>
        </div>
    )
}

export default Services;