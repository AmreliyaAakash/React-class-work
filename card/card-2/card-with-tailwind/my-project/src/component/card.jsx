import style from '../component/style.module.css';

const Card = ({ item: { image, item_name, description, price, rating } }) => {
    return (
        <>
            <div className="flex w-64  stroke-sky-500 group-hover:stroke-white hover:scale-105 transition-transform duration-300 ease-in-out  ">
                <div className="h-80 flex-col items-center justify-center p-4 m-2 bg-white shadow-lg rounded-lg">
                    <img className=' w-full h-32 object-cover rounded-[0.5vw] outline-2 outline-offset-2 outline-solid border border-black' src={image} alt={item_name} />
                    <h2 className='font-bold text-lg'>{item_name}</h2>
                    <p>{description}</p>
                    <p className=''>Price: ₹{price}</p>
                    <p className={`${rating >= 4 ? style.ratingHigh : style.lowRating}`}>
                        Rating: {rating} ⭐
                    </p>
                </div>

            </div>

        </>
    );
};

export default Card;