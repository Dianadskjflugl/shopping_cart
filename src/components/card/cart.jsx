import CartHeader from './cartHeader/cartHeader'
import ProductElement from './product/product'
import CartFooter from './footer/footer'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const Cart = () => {
    const data = useSelector(state => state.cart.data)
    const [total, setTotal] = useState({
        price: data.reduce((prev, curr)=> prev + curr.priceTotal, 0),
        count: data.reduce((prev, curr)=> prev + curr.count, 0)
    })
    
    const changeTotal = () => {
        setTotal({
            price: data.reduce((curr, prev) => curr + prev.priceTotal, 0),
            count: data.reduce((curr, prev) => curr + prev.count, 0)
        })
    }

    useEffect(() => {
        changeTotal()
    }, [data])

    return (
        <section className="cart">
            {data.length == 0
                ? <h1 style={{margin: '10%', textAlign: 'center', fontSize: '22px'}}>Ваша корзина пуста!</h1>
                : <> 
                    <CartHeader />
                    {data.map(p =>
                    <ProductElement key={p.id}
                        id={p.id}
                        img={p.img}
                        title={p.title}
                        priceTotal={p.priceTotal}
                        count={p.count}/>)}
                    <CartFooter total={total} />
                </>
            }
        </section>
    )
}

export default Cart;
