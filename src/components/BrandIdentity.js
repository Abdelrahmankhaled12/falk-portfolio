import PackagingDesignIMG from "../images/PackagingDesignIMG.png"
import GifWeb from "../images/GifWeb.jpg"
import BrandColor from "./BrandColor"
import BrandLogo from "./BrandLogo"
import BrandCreative from "./BrandCreative"
import Brand from "./Brand"
import BrandTypography from "./BrandTypography"


function BrandIdentity() {
    return (
        <div className="pt-12 pb-12">
            <div className="container">
                <h1 className="text-center text-primary-color text-[50px] font-semibold">Brand Identity</h1>
                <BrandColor />
                <BrandTypography />
                <BrandLogo />
                <Brand title="Packaging Design" img={PackagingDesignIMG} />
            </div>
            <Brand title="Web Page" img={GifWeb} />
            <div className="container">
                <BrandCreative />
            </div>
        </div>
    )
}


export default BrandIdentity;