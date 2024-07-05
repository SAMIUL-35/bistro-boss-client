const Itemcard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-md">
            <img
                style={{ borderRadius: '0 200px 200px 200px' }}
                className="w-[100px] h-[100px] object-cover mr-4"
                src={image}
                alt={name}
            />
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{recipe}</p>
            </div>
            <p className="text-lg font-bold text-gray-800">${price}</p>
        </div>
    );
};

export default Itemcard;
