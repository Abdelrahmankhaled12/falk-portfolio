import React, { useState } from 'react';

// "DropdownMenu" that creates a dropdown menu. The component includes a function called "useState" that is used to manage the component's state.
// The function returns an array containing two variables, the first being the current value of the state and the second being a function to update the state.
// "useState" is used to set the default value of "isOpen" to false. Once the state is set, "setIsOpen" can be used to update the value later.
// "isOpen" is used to determine whether the dropdown menu is open or not. The "map" function is used to create the dropdown menu items, which are passed as an array to "options".
// An HTML element for the dropdown menu is created inside a "div" element with the class "dropdown". This element contains a "p" element to display the button name and a "button" element to activate the dropdown menu. "isOpen" is used to determine whether the "ul" element that contains the options should be displayed or not. The "options.map" is used to convert each option in "options" to an "li" element in the dropdown menu.


// How to work
// To Send options => sending an Array containing objects where each object has : value , label
// To Send Name Button 


function DropdownMenu({ options , nameButton }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <p className='text-primary-color text-[40px] mb-1 mt-5'> {nameButton} <button className='text-white text-[25px] mb-1 mt-5' onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true) }> <i className="fa-solid fa-chevron-down"></i></button></p>
            {isOpen && (
                <ul className="dropdown-menu transition opacity delay-300 ease-in-out">
                    {options.map((option) => (
                        <li className='mb-2 text-[20px]' key={option.value}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
