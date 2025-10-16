import React, { useState} from "react";

const FreeTrialPopup = ({ isOpen, onClose }) => {
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);
    const [formData, setFormData] = useState({
        Name: "",
        organizationName: "",
        domain: "",
        noOfUsers: "",
        email: "",
        contact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setIsThankYouOpen(true); // show thank-you message
        setFormData({
            Name: "",
            organizationName: "",
            domain: "",
            noOfUsers: "",
            email: "",
            contact: "",
        });
    };

    // Auto-close popup after 3 seconds when thank you is shown
    // useEffect(() => {
    //     if (isThankYouOpen) {
    //         const timer = setTimeout(() => {
    //             setIsThankYouOpen(false);
    //             onClose(); // close popup completely
    //         }, 3000);
    //         return () => clearTimeout(timer);
    //     }
    // }, [isThankYouOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 animate-fadeIn">
            <div className="bg-gradient-to-br from-purple-100 via-white to-indigo-100 w-full max-w-lg mx-4 rounded-3xl shadow-2xl p-8 relative transform transition-all duration-300 scale-95 hover:scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                >
                    &times;
                </button>

                {!isThankYouOpen ? (
                    <>
                        <h2 className="md:text-3xl text-xl md:font-extrabold font-bold text-center text-gray-900 lg:mb-6 mb-4">
                            🚀 Start Your Free Trial
                        </h2>
                        <p className="text-center text-gray-600 lg:mb-6 mb-4">
                            Fill in your details below and get started instantly!
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {[
                                { name: "Name", placeholder: "Your Name", type: "text" },
                                { name: "organizationName", placeholder: "Name of the Organisation", type: "text" },
                                { name: "domain", placeholder: "Domain (e.g. example.com)", type: "text" },
                                { name: "noOfUsers", placeholder: "No. of Users", type: "number" },
                                { name: "email", placeholder: "Email ID", type: "email" },
                                { name: "contact", placeholder: "Contact No.", type: "tel" },
                            ].map((field) => (
                                <input
                                    key={field.name}
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    required
                                    className="w-full border-2 border-transparent focus:border-gradient-to-r focus:ring-2 focus:ring-purple-500 bg-white rounded-xl px-4 py-3 shadow-md transition-all duration-300 placeholder-gray-400"
                                />
                            ))}

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-5 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold shadow-xl hover:scale-105 hover:shadow-2xl hover:from-indigo-500 hover:to-purple-500 transition transform duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-gray-400 text-sm">
                            We respect your privacy. Your data is safe with us.
                        </p>
                    </>
                ) : (
                    // Thank You Message
                    <div className="text-center p-8">
                        <div className="text-green-500 text-6xl mb-4 animate-bounce">✅</div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                        <p className="text-gray-600">
                            Your submission has been received. We will get back to you shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FreeTrialPopup;
