import "./scss/_main.scss";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Contact from "./components/Contact";


function App() {
  return (
    <div >


        <NavBar />
        <Slider />
        <MainPage />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;
