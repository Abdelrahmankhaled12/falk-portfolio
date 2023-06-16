function BrandTypography() {
    return (
        <div className="pt-12 pb-12">
            <p className="my-5 text-primary-color text-[25px] font-semibold">Typography</p>
            <div className="flex space-x-12 mt-3">
                <h1 className="text-second-color text-[30px] font-bold">Poppins</h1>
                <h1 className="text-second-color text-[30px] font-bold">Bold</h1>
            </div>
            <div className="flex space-x-12 mt-3">
                <h1 className="text-second-color text-[30px] font-semibold">Poppins</h1>
                <h1 className="text-second-color text-[30px] font-semibold">SemiBold</h1>
            </div>
            <div className="flex space-x-12 mt-3">
                <h1 className="text-second-color text-[30px]">Poppins</h1>
                <h1 className="text-second-color text-[30px]">Regular</h1>
            </div>
        </div>
    )
}

export default BrandTypography;