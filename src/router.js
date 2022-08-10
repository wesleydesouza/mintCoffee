import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import About from "./pages/About";
import Coffies from "./pages/Coffies";
import Header from "./components/header";

const Roads = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/coffee/:id" element={<Coffee/>}/>
                <Route path="/coffies/" element={<Coffies/>}/>
                <Route path="/about" exact element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Roads;