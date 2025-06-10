import style from '../component/style.module.css'
import './card.css'
const Card = ({ item: { image, item_name, description, price, rating } }) => {
    return (
        <div className="col-4">
            <div className="card">
                <img className='image1' src={image} alt={item_name} />
                <h2>{item_name}</h2>
                <p>{description}</p>
                <p>Price: ${price.toFixed(2)}</p>
                <p className={`rating ${rating >= 4 ? style.ratingHigh : style.lowRating}`}>
                    Rating: {rating} ⭐
                </p>
            </div>
        </div>
    )
}

export default Card