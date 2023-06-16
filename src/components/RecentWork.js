import Card from "./Card";

function RecentWork() {

    return (
        <div className="pt-20 pb-20 bg-white relative z-10">
            <div className="container">
                <p className="text-center text-primary-color text-[18px]">Recent Work</p>
                <h1 className="text-center text-primary-color text-[40px] mb-5  font-semibold">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                <Card textHover="Brand Identity, Packaging Design, Web Design and Ad Creative" text="Web Design" clas="block lg:w-[400px] w-[320px] mx-auto lg:mr-[0]  rounded-[15px]  bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-[400px] lg:ml-auto" />
                <Card text="Web Design,Markering" textHover="Web Design, Copywriting, Meta Ads." clas="block  rounded-[15px] lg:w-[400px] w-[320px] mx-auto lg:ml-[0] lg:mr-auto bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-[400px]" />
                </div>
            </div>
        </div>
    )
}

export default RecentWork;


