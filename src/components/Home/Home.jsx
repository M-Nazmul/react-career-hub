import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import HeroPage from "../HeroPage/HeroPage";

const Home = () => {
    return (
        <div>
            <HeroPage></HeroPage>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;