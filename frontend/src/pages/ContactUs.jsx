import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow bg-gray-50 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto bg-white shadow-md rounded-lg p-8">
                    <div className="text-center lg:text-left lg:w-1/2 px-6 py-6">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in touch with</h1>
                        <h2 className="text-6xl font-extrabold text-indigo-600 mb-4">603</h2>
                        <div className="mb-4 flex items-center text-lg text-gray-600">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 mr-2" />
                            Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
                        </div>
                        <div className="mb-4 flex items-center text-lg text-gray-600">
                            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 mr-2" />
                            <a href="mailto:sales@603thecoworkingspace.com" className="text-indigo-600 hover:underline">
                                sales@603thecoworkingspace.com
                            </a>
                        </div>
                        <div className="mb-4 flex items-center text-lg text-gray-600">
                            <FontAwesomeIcon icon={faPhone} className="text-indigo-600 mr-2" />
                            <a href="tel:+919136036603" className="text-indigo-600 hover:underline">
                                +91 9136036603
                            </a>
                        </div>
                        <p className="mt-4 text-gray-600">
                            We're here to help and answer any questions you might have. We look forward to hearing from you.
                        </p>
                    </div>

                    <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center">
                        <img className="max-w-full h-auto rounded-lg shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s" alt="Contact Us" />
                        <div className="mt-6 text-gray-600 text-center lg:text-left px-6">
                            <p className="text-lg font-semibold lg:text-left px-56">Kunal Kataria, Director</p>
                            <p className="mt-4">
                                603 A number defining Success, Infinity and Energy. Our aim is to support your business’s triumphs, shaping an enduring legacy. Your legendary feat are etched in memory, and if we can enhance that by even 0.1%, grant us the privilege to assist. Backed by unwavering commitment, the 603 team will provide unparalleled services. The essence of our prosperity is rooted in the synergy of our team, each member enriching with their distinct skills. Our realm fosters enterprise growth, a testament to our collective resolve. It’s this shared ethos that paves the way to our accomplishments, propelling us forward.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-800 mt-8">
                    Drop us a note and we’ll be in touch shortly!
                </h2>
                <div className="bg-yellow-300 w-full max-w-4xl mx-auto mt-8 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name*</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone*</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="tel" id="phone" name="phone" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email*</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Preferred Location*</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="location" name="location" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="seats">Number of Seats Required*</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="number" id="seats" name="seats" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="company">Company</label>
                            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="company" name="company" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="specifications">Specifications</label>
                            <textarea className="w-full px-3 py-2 border rounded-lg" id="specifications" name="specifications" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <button className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
