import React from "react";

export const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
                <p className="text-gray-600 text-center mb-4">
                    Feel free to reach out to us! We're happy to help.
                </p>

                <div className="space-y-4">
                    {/* Your Name */}
                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 w-24">Name:</span>
                        <span className="text-gray-800">Robin Stiller</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 w-24">Email:</span>
                        <a 
                            href="mailto:little.fox.e1000@gmail.com" 
                            className="text-blue-600 hover:underline"
                        >
                            little.fox.e1000@gmail.com
                        </a>
                    </div>

                    {/* Another Contact */}
                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 w-24">Name:</span>
                        <span className="text-gray-800">Dennis Plischke</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 w-24">Email:</span>
                        <a 
                            href="mailto:dennisplischke755@gmail.com" 
                            className="text-blue-600 hover:underline"
                        >
                            dennisplischke755@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};