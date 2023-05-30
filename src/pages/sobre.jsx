import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

function Sobre() {
  return (
    <>        
    <Header/>
    <Navbar/>
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
        Farmácia em termos gerais, é a ciência praticada por graduados em farmácia, tem como objeto de estudo fármacos, drogas e medicamentos e a forma como os usuários interagem com eles. Atualmente esta área é marcada pelos conceitos de assistência farmacêutica e atenção farmacêutica.
        </p>
      </div>
      <Footer/>
    </>
  );
}
export default Sobre;
