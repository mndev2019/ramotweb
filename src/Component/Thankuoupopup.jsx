import React, { useEffect } from "react";

const Thankuoupopup = ({ isOpen, onClose }) => {
    // Auto-close after 3 seconds
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 animate-fadeIn">
            <div className="bg-white w-full max-w-md mx-4 rounded-3xl shadow-2xl p-8 relative text-center transform transition-all duration-300 scale-95 hover:scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition"
                >
                    &times;
                </button>

                {/* Icon */}
                <div className="text-green-500 text-6xl mb-4 animate-bounce">
                    ✅
                </div>

                {/* Message */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                </h2>
                <p className="text-gray-600">
                    Your submission has been received. We will get back to you shortly.
                </p>
            </div>
        </div>
    );
};

export default Thankuoupopup;

