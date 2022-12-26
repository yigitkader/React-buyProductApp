import BasketItem from "./BasketItem.component";

export default function Basket({basket}){

    return (
        <>
            {  basket.map(item => (
                <BasketItem key={item.id} item={item}/>
                ))
            }
        </>
    );
}