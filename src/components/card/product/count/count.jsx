import './count.scss'
import decreaseImage from '../../../../assets/icons/icon-down.svg'
import increaseImage from '../../../../assets/icons/icon-up.svg'
import { useDispatch } from 'react-redux'
import { decreaseValue, increaseValue, changeValue } from '../../../../store/cartSlice';

const ProductCount = ({count, id}) => {
    const dispatch = useDispatch()
    const change = (e) => {
        const event = +e.target.value
        dispatch(changeValue({id, event}))
    }

    return (
        <div className="count">
            <div className="count__box">
                <input type="number" className="count__input" min="1" max="100" value={count} onChange={change}/>
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={() => dispatch(increaseValue(id))}>
                    <img src={increaseImage} alt="Increase" />
                </button>
                <button type="button" className="count__down" onClick={() => dispatch(decreaseValue(id))}>
                    <img src={decreaseImage} alt="Decrease" />
                </button>
            </div>
        </div>
    )
}

export default ProductCount;