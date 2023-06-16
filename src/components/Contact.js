
import React, { useState } from 'react';
import axios from 'axios';




function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [dataHref , setDataHref] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('../php/sendmail.php', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setDataHref("mailto:abdelrahman.khaled1086@gmail.com?subject=" + formData.name +"&body="+ formData.message )
    };



    return (
        <div className="bg-bgColor pt-10 pb-10" id="Contact">
            <div className="container">
                <p className="text-primary-color text-[40px]">Get in touch</p>
                <h1 className="text-primary-color  text-[70px]">
                    Don't be a <br /> stranger! <br /> Say hi!
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <form className="space-y-3 col-span-2" onSubmit={handleSubmit}>
                        <input type={"text"} name="name" onChange={handleChange}  className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full" placeholder="Name" />
                        <input type={"email"} name="email" onChange={handleChange} className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full" placeholder="Email" />
                        <textarea name="message" onChange={handleChange} className="rounded-lg border-2 border-solid border-second-color py-2.5 px-4 text-xl w-full h-[200px]" placeholder="Write a message"></textarea>
                        <a href={dataHref} className="bg-primary-color border border-solid border-primary-color text-white font-semibold hover:text-primary-color hover:bg-white duration-500 py-2.5 px-4 rounded-xl">Send to message</a>
                    </form>
                    <div className="boxes">
                        <div className="box mb-5 p-10 bg-second-color rounded-[40px] text-white text-center">
                            <h1 className="text-[30px] font-semibold mb-3">Email</h1>
                            <p className="text-[20px]">Send a message</p>
                        </div>

                        <div className="box  mb-5 p-10 bg-second-color rounded-[40px] text-white text-center">
                            <h1 className="text-[30px] font-semibold mb-3">WhatsApp</h1>
                            <p className="text-[20px]">Send a message</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;