import logo from './logo.svg';
import './App.css';
import Header from './components/Header.component';
import {useState,useEffect} from 'react';
import Product from './components/Product.component';
import products from './fake-api/products.json';
import Basket from './components/Basket.component';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setbasket] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const totalMoney = basket.reduce((acc,item) => {
        return acc + (item.amount * products.find(prod => prod.id === item.id).price);
    },0 )
    setTotal(totalMoney);
    console.log(basket);
  }, [basket]);

  const clearBasket = () => {
    setbasket([]);
  }

  return ( 
    <div className="App">
      <Header total = {total} money={money} setMoney = {setMoney} setBasket = {setbasket} />
      <button onClick={clearBasket}>Clear Basket</button>
      {products.map(prod => (
        <Product key={prod.id} basket = {basket} setBasket = {setbasket} product={prod} total = {total} money = {money}/>
      ))}
      <hr/>
      <div>
        <p>Items you have </p>
        <Basket basket={basket}/>
      </div>
      
    </div>
  );
}

export default App;
