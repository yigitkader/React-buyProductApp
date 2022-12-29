
import './css/Product.component.css'

export default function Product({product,basket,setBasket,total,money}){


    const productsOnBasket = basket.find(item => item.id === product.id)

    const addToBasket = () =>{
 
        const checkBasketItem = basket.find(item => item.id === product.id);
        if(checkBasketItem){
            checkBasketItem.amount +=1;
            setBasket([...basket.filter(item => item.id !== checkBasketItem.id),checkBasketItem]);
        }else{
            setBasket([...basket,{
                id : product.id,
                name : product.name,
                amount : 1
            }])
        }
    }

    const removeFromBasket =() => {
        const checkBasketItem = basket.find(item => item.id === product.id);
        checkBasketItem.amount -=1;
        if(checkBasketItem === 0 || checkBasketItem.amount < 0){
            setBasket([...basket.filter(item => item.id !== checkBasketItem.id)]);
        }else{
            setBasket([...basket.filter(item => item.id !== checkBasketItem.id),checkBasketItem])
        }

    }

    return (
        <div className="container product">
            <div className= "">
                <img src={product.image_url} alt='' />
                <h6>{product.name}</h6>
                <div>
                    <h6>$ {product.price}</h6>
                </div> 
                <div className="product-details">
                    <button disabled = {(total + product.price ) > money} onClick={addToBasket}>Add</button>
                    <span className="amount"> {(productsOnBasket && productsOnBasket.amount) ? productsOnBasket.amount : 0} </span>
                    <button disabled = {!productsOnBasket || productsOnBasket.amount<1} onClick={removeFromBasket} >Remove</button>
                </div>    
            </div>
        </div>
    )
}