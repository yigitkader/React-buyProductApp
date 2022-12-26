export default function BasketItem({item}){
    return (
        <div>
            <p>{item.name} x {item.amount}</p>
        </div>
    );
}