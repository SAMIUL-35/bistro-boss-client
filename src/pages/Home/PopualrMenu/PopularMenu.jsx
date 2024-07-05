import { useEffect, useState } from "react";
import Titlename from "../../../shared/titlename/Titlename";

import Itemcard from "../itemcard/Itemcard";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === "popular")));
    }, []);

    return (
        <section className="mb-12">
           <div className='flex justify-center w-full'>
           <div className='text-center mb-4 mt-4 '>
           <Titlename
            
            subheading="----from 11:00am to 10:00pm----"
            heading="From Our Menu"
        ></Titlename>
           </div>
           </div>
            <div className="grid md:grid-cols-2 gap-3">
                {menu.map(item => (
                    <Itemcard 
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
