import { useState } from "react";

// "useState" is used to set the default value of "currentElement" to 0. 
// Once the state is set, "setCurrentElement" can be used to update the value later.

// "currentElement" is used to determine which card to display currently. 
// The "liItemActive" function is used to change the active item's color in 
// the dropdown menu, while the "cardActive" function is used to make the appropriate card appear currently.


// How to Work 
// By sending an Array containing objects where each object has:
// Image: The image you display in the card 
// Name: Name of the person  
// Comment: Text  

function TestimonialsCards(props) {
    let [currentElement, setCurrentElement] = useState(0);

    let cardsItems = props.cards.map((element, index) => {
        return <div key={index} id={index} className="bg-[#ECECEC] rounded-xl p-10  dark:bg-slate-800 lg:w-[600px] lg:mx-auto  transition-opacity duration-200 card">
            <img className="w-24 h-24 rounded-full mx-auto" src={element.image} width={384} height={512} alt="" />
            <div className="md:pb-8 md:pl-8 md:pr-8 text-center space-y-4">
                <blockquote>
                    <p className="text-primary-color font-semibold text-[20px] mt-2 mb-5">{element.name}</p>
                    <p className="text-lg font-medium text-primary-color">
                        {element.comment}
                    </p>
                </blockquote>
            </div>
        </div>
    })

    let liItems = props.cards.map((element, index) => {
        if (index === 0) {
            return <li className="w-[18px] h-[18px] bg-primary-color rounded-[50%]" key={index} id={index} onClick={(e) => {
                setCurrentElement(+e.target.id)
                liItemActive(+e.target.id)
                cardActive(+e.target.id)
            }}></li>
        } else {
            return <li className="w-[18px] h-[18px] bg-[#ECECEC] rounded-[50%]" key={index} id={index} onClick={(e) => {
                setCurrentElement(+e.target.id)
                liItemActive(+e.target.id)
                cardActive(+e.target.id)
            }}></li>
        }
    })


    function liItemActive(current) {
        let li = document.querySelectorAll("ul li");
        li.forEach((element, index) => {
            element.classList.remove("bg-primary-color");
            element.classList.add("bg-[#ECECEC]");
            if (+element.id === current) {
                element.classList.add("bg-primary-color")
            }
        });
    }

    function cardActive(current) {
        let card = document.querySelectorAll(".card");
        card.forEach((element, index) => {
            element.classList.add("opacity-0")
            if (+element.id === current) {
                element.classList.remove("opacity-0")
                element.classList.add("opacity-100")
            }
        })
    }


    return (
        <>
            {cardsItems[currentElement]}
            <ul className="flex justify-center items-center space-x-3 mt-3 ">
                {liItems.map((element, index) => (element))}
            </ul>
        </>
    )
}

export default TestimonialsCards;