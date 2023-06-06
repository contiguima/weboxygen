import Navbar from "../components/Navbar";
import "../styles/mainpage.css"


const MainPage = () => {
    return (<>
        <Navbar/>
        <section className="layoutHome">
            <h1>Invertí a favor del ambiente</h1>
            <h3>Protegemos árboles de ser talados y conservamos  <br/> territorios nativos</h3>
            <button >Comenzá</button>

            <div className="dataBoard">
                <p><strong>133.150</strong> hectareas de bosque</p>
                <div className="dataBoardLine"></div>
                <p><strong>133.150</strong> hectareas de bosque</p>
                <div className="dataBoardLine"></div>
                <p><strong>133.150</strong> hectareas de bosque</p>
                <div className="dataBoardLine"></div>
            </div>
        </section>

        
        </>
     
    );
  };
  
  export default MainPage;