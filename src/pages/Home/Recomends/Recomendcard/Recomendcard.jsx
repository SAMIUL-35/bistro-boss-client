

const Recomendcard = ({card}) => {
    const {image,name,price}=card;
    return (
        <div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recomendcard;