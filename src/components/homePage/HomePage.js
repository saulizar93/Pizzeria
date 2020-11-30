import CardsPage from './CardsPage';

export default function HomePage(){
    return(
        <div style={{textAlign: "center"}}>
            <CardsPage/>
            <img src={require("../../img/pizza.png")} alt=""/>
        </div>
    )
}