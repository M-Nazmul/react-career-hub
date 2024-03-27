import { useEffect, useState } from "react";
import CategoryListCard from "../CategoryListCard/CategoryListCard";

const CategoryList = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('../../../public/categories.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="max-w-[653px] mx-auto px-4">
                <h1 className="text-2xl md:text-5xl mt-8 md:mt-24 text-center ">Job Category List</h1>
                <p className="text-base text-center mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-32">
                {
                    cards.map(card => <CategoryListCard key={card.id} card={card} ></CategoryListCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;