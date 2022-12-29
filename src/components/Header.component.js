
export default function Header({total,money,setMoney,setBasket}){

    return(
        <>
            <div className="header">
                <h3 className="header-text">Remain money : $ {money - total}</h3>
                <h3 className="header-text">Total money : $ {(money && total) ? total : 0}</h3>
            </div>
            <hr></hr>
        </>
    )
}