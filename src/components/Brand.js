function Brand(props) {
    return (
        <div className="pt-12 pb-12">
            <h1 className="text-center text-primary-color text-[50px] font-semibold mb-10">{props.title}</h1>
            <img src={props.img} alt="" className="mx-auto w-full" />
        </div>
    )
}

export default Brand;