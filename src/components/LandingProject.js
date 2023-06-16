import image from "../images/HeroIMG.png"

function LandingProject() {
    return (
        <div>
            <div className="container pt-10 pb-10">
                <h1 className="text-[50px] md:text-[70px] text-primary-color font-semibold ">Serotoned-01</h1>
                <div className="flex space-x-5 text-[15px] md:text-[20px] text-second-color font-semibold">
                    <p>Brand Design</p>
                    <p>Web Design</p>
                    <p>Ad Creative</p>
                </div>
                <h2 className="my-10 font-semibold text-[30px] md:[text-35]">www.serotoned.com</h2>
            </div>
            <img src={image} alt="" className="w-[100%]" />
            <div className="container">
                <div className="pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mt-5">
                        <h2 className="text-[35px] text-primary-color font-semibold">Project Overview</h2>
                        <p className="my-5 text-lg text-second-color font-semibold">Serotoned is a health supplement that balances the serotonin levels in your body for a brighter life.</p>
                        <p className="text-lg text-second-color font-semibold">The task was to:</p>
                        <ul className="list-disc ps-10 text-second-color font-semibold">
                            <li>Create Brand Identity</li>
                            <li>Package Design</li>
                            <li>Web Page</li>
                            <li> Ad Creative</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[35px] text-primary-color font-semibold">The Process</h2>
                        <p className="my-5 text-lg text-second-color font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation..</p>
                        <h2 className="text-[35px] text-primary-color font-semibold">The Keywords:</h2>
                        <ul className="list-disc ps-12 text-second-color font-semibold">
                            <li>modern</li>
                            <li>simple and minimalistic</li>
                            <li>playful/colorful</li>
                            <li>inviting/welcoming</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[35px] text-primary-color font-semibold">Challange</h2>
                        <p className="my-5 text-lg text-second-color font-semibold">Serotoned is a new company without an established customer base. The challange was to find a brand identity that was in line with the company vision. We needed to create something that stands out from other competitors in health&supplement market.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-[35px] text-primary-color font-semibold">Solution</h2>
                        <p className="my-5 text-lg text-second-color font-semibold">We needed to establish clarity on the brands vision and who we are targeting. </p>
                        <ul className="list-disc ps-12 text-second-color font-semibold">
                            <li>be clear on company/brand vision</li>
                            <li>competitor research - how can we something different?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingProject;






