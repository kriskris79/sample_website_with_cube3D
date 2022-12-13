import "./scss/_main.scss";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JokeGen from "./components/JokeGen";
import Slider from "./components/Slider";
import BlogWordpress from "./components/BlogWordpress";
import Contact from "./components/Contact";
import CubeWithPictures from "./components/CubeWithPictures";

function App() {
  return (
    <div >


        <NavBar />
        <Slider />
        <MainPage />
        <CubeWithPictures />
        <Contact />

        <BlogWordpress />
        <JokeGen />
        <Footer />




    </div>
  );
}

export default App;

