import { useEffect, useState } from "react";
import Titlename from "../../../shared/titlename/Titlename";
import Recomendcard from "./Recomendcard/Recomendcard";

const Recomends = () => {
    const [menu, setMenu] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data));
    }, []);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <div>
            <div className='flex justify-center w-full'>
                <div className='text-center mb-4 mt-4'>
                    <Titlename
                        subheading="Should Try"
                        heading="Chef Recommends"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {menu.slice(0, visibleCount).map(card => (
                    <Recomendcard key={card.id} card={card} />
                ))}
            </div>
            {visibleCount < menu.length && (
                <div className="flex justify-center mt-4">
                    <button onClick={loadMore} className="btn btn-primary">Load More</button>
                </div>
            )}
        </div>
    );
};

export default Recomends;
