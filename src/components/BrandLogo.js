import logo from "../images/Logo.png"

function BrandLogo() {
    return (
        <div className="pb-12 pt-12">
            <p className="my-5 text-primary-color text-[25px] font-semibold">Logo</p>
            <img src={logo} alt="" className="mx-auto" />
        </div>
    )
}

export default BrandLogo;