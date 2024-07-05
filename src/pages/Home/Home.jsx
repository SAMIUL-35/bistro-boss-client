import Banner from "./Banner";
import Category from "./Category/Category";
import Feture from "./Feture/Feture";
import PopularMenu from "./PopualrMenu/PopularMenu";
import Recomends from "./Recomends/Recomends";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Recomends></Recomends>
           <Feture></Feture>
        </div>
    );
};

export default Home;