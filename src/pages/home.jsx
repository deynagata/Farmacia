import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import banner from "../assets/imgs/pexels-anna-shvets-3683056.jpg"
import COVID from "../assets/imgs/pexels-artem-podrez-5878504.jpg"
import Remedio from "../assets/imgs/pexels-agustina-r-street-15794659.jpg"
import SERINGA from "../assets/imgs/pexels-karolina-grabowska-4210552.jpg"
const produtos = [
    {
        nome: "Seringa",
        preco: "R$40,00",
        img: SERINGA
    },
    {
        nome: "Remedio e Goteira",
        preco: "R$100,00",
        img: Remedio
    },
    {
        nome: "VacinaCOVID-19",
        preco: "R$70,00",
        img: COVID
    }
]
function Home(){
    return(
        <>
            <Header/>
            <Navbar/>
            <section>
                <img src={banner} alt="" className="banner"/>
                <h1>Produtos a venda</h1>
                <div className="Produtos">
                {produtos.map(({nome, preco, img}) => (
                    <div className='card' key={nome}>
                        <img src={img} alt="" />
                        <h2>{nome}</h2>
                        <p>{preco}</p>
                    </div>
                ))
                }
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home