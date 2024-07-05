import Titlename from "../../../shared/titlename/Titlename";
import fetureimg from "../../../assets/home/featured.jpg"


const Feature = () => {
    return (
        <div className=" mb-10 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fetureimg})` }}>
           <div className='flex justify-center w-full'>
           <div className='text-center mb-4 mt-4 '>
           <Titlename
            
            subheading="Chek it out"
            heading="From Our Menu"
        ></Titlename>
           </div>
           </div>
            <div className="md:flex justify-center items-center py-8 px-35">
                <div>
                    <img className="w-[400px]" src={fetureimg} alt="Featured" />
                </div>
                <div className="md:ml-10 ">
                    <p>March 20, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, modi!</p>
                    <button className="btn glass bg-slate-300 mt-2">more read</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
