
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
        <div className="product">
            <h6>{product.name}</h6>
            <h6>$ {product.price}</h6>
            <div className="product-details">
                <button disabled = {(total + product.price ) > money} onClick={addToBasket}>Add to Basket</button>
                <span className="amount"> {(productsOnBasket && productsOnBasket.amount) ? productsOnBasket.amount : 0} </span>
                <button disabled = {!productsOnBasket || productsOnBasket.amount<1} onClick={removeFromBasket} >Remove from Basket</button>
            </div>
            {/* <style jsx>{`
            .product{
                padding : 10px;
                background : #fff;
                border: 1px solid #ddd;
                margin-bottom:15px;
            }
            `}
            </style> */}
        </div>
    )
}