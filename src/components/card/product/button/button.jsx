import { useDispatch } from 'react-redux';
import deliteButton from '../../../../assets/icons/cross.svg'
import { removeProduct } from '../../../../store/cartSlice';

const ButtonDelite = ({id}) => {
    const dispatch = useDispatch()
    
    return (
        <button type="button" onClick={() => dispatch(removeProduct(id))}>
            <img src={deliteButton} alt="Delite"/>
        </button>
    )
}

export default ButtonDelite;
