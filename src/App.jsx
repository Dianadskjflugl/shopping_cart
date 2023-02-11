import './styles/sectionCard.scss'
import './styles/app.scss'
import './styles/reset.scss'
import './styles/vars.scss'
import Title from './components/title/title'
import Cart from './components/card/cart'
import { Provider } from 'react-redux'
import store from './store'

Cart
function App() {
  return (
    <Provider store={store}>
      <section className="section-cart">
        <header className="section-cart__header">
          <div className="container">
            <Title />
          </div>
        </header>
        <div className="section-cart__body">
          <div className="container">
            <Cart />
          </div>
        </div>
      </section>
    </Provider>
  );
}

export default App;
