import AdCreative1 from "../images/AdCreative1.png"
import AdCreative2 from "../images/AdCreative2.png"

function BrandCreative() {
    return (
        <div className="pt-12 pb-12">
            <h1 className="text-center text-primary-color text-[50px] font-semibold mb-10">Ad Creative</h1>
            <img src={AdCreative1} alt="" className="mx-auto mb-[70px]" />
            <img src={AdCreative2} alt="" className="mx-auto" />
        </div>
    )
}

export default BrandCreative;