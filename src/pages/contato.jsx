import Navbar from "../components/navbar"
import Header from "../components/header"
import Footer from "../components/footer"
import insta from "../assets/imgs/instagramlogo.svg"
import email from "../assets/imgs/email.svg"
import tiktok from "../assets/imgs/tiktok.svg"

function Contato(){
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="vh">
            <form className="contato">
                <h1>Receber novidades!</h1>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <button>Enviar</button>
            </form>
            <div className="info">
                <ul>
                    <li><img src={insta} alt=""/>@farmacelta</li>
                    <li><img src={email} alt="" />farmacelta@farmacelta.com</li>
                
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contato