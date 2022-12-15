import "./scss/_main.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JokeGen from "./components/JokeGen";
import MainSlider from "./components/MainSlider";
import BlogWordpress from "./components/BlogWordpress";
import Contact from "./components/Contact";
import CubeWithPictures from "./components/CubeWithPictures";



function App() {
  return (
    <div >


        <NavBar />
        <MainSlider />
        <CubeWithPictures />
        <Contact />

        <BlogWordpress />
        <JokeGen />
        <Footer />




    </div>
  );
}

export default App;

//
// function App() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="login" element={<Login />} />
//                 <Route path="contact" element={<Contact />} />
//             </Routes>
//             <Footer />
//         </BrowserRouter>
//     )
// }
//
// export default App;
