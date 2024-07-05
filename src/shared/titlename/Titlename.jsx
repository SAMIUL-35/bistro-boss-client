// Titlename.js



const Titlename = ({ subheading, heading }) => {
    return (
        <div className="border-1 border-gray-300 p-4 rounded-md">
            <p className="text-sm text-gray-600">{subheading}</p>
            <h1 className="text-2xl font-bold">{heading}</h1>
        </div>
    );
};

export default Titlename;
