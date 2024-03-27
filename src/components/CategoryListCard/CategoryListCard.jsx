import PropTypes from 'prop-types';
const CategoryListCard = ({card}) => {
    const {availability, category_name, logo} = card;
    return (
        <div className="max-w-[311px] mx-auto rounded-lg  dark:bg-slate-800 bg-[#F9F8FF] p-10 pr-20  hover:scale-105 duration-200 ease-in-out">
            <figure className='p-4'>
                <img src={logo} alt="" />
            </figure>
            <h2 className='text-xl font-extrabold dark:text-gray-200 text-black'>{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};
CategoryListCard.propTypes = {
    card: PropTypes.object
  }
export default CategoryListCard;