
import image from "../images/craig-mckay-jmURdhtm7Ng-unsplash 1.png"
import image1 from "../images/testimonial-1.jpg"
import TestimonialsCards from "./hooks/TestimonialsCards";

function Testimonials() {
    let cards = [
        {"image":image,"name":"Thomes","comment":"“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”"},
        {"image":image1,"name":"ahmed","comment":"“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”"}

    ]
    return (
        <div className="pt-12 pb-12">
            <div className="container">
                <p className="text-center text-lg text-primary-color font-semibold">What Clients Say</p>
                <h1 className="text-center text-[50px] font-semibold text-primary-color mb-5">Testimonials</h1>
                <TestimonialsCards cards={cards} />
            </div>
        </div>
    )
}

export default Testimonials;