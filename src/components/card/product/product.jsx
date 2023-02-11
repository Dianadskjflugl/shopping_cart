import './product.scss'
import ProductCount from './count/count';
import ButtonDelite from './button/button';
import priceFormatter from '../../../utils/priceFormatter';

const ProductElement = ({img, title, priceTotal, count, id}) => {

    return (
        <section className="product">
            <div className="product__img"><img src={img} alt="Apple MacBook Air 13" /></div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <ProductCount count={count} id={id}/>
            </div>
            <div className="product__price">{priceFormatter.format(priceTotal)}</div>
            <div className="product__controls">
                <ButtonDelite id={id}/>
            </div>
        </section>
    )
}

export default ProductElement
