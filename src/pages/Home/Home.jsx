import Banner from "./Banner";
import Category from "./Category/Category";
import Feture from "./Feture/Feture";
import PopularMenu from "./PopualrMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Feture></Feture>
        </div>
    );
};

export default Home;