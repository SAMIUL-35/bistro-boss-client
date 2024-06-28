// Titlename.js

import React from 'react';

const Titlename = ({ subheading, heading }) => {
    return (
        <div className="border-2 border-gray-300 p-4 rounded-md hover:border-blue-500 transition-colors duration-300">
            <p className="text-sm text-gray-600">{subheading}</p>
            <h1 className="text-2xl font-bold">{heading}</h1>
        </div>
    );
};

export default Titlename;
