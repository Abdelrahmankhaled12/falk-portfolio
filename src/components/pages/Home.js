import Contact from "../Contact";
import Footer from "../Footer";
import LandingHome from "../LandingHome";
import RecentWork from "../RecentWork";
import Services from "../Services";
import Testimonials from "../Testimonials";

function Home() {

    return (
        <>
            <LandingHome />
            <RecentWork />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </>

    );
}

export default Home;
