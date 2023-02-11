import './footer.scss'
import priceFormatter from '../../../utils/priceFormatter'

const CartFooter = ({total}) => {
    const {price, count} = total
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">товары: {count}</div>
            <div className="cart-footer__price">{priceFormatter.format(price)} руб.</div>
        </footer>
    )
}

export default CartFooter;