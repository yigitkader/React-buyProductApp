
export default function Header({total,money,setMoney,setBasket}){

    return(
        <>
            <div className="App-header">
                <h3>Remain money : $ {money - total}</h3>
                <h3>Total money : $ {(money && total) ? total : 0}</h3>
            </div>
            <hr></hr>
        </>
    )
}