import Navbar from "./components/navbar";
import Search from "./components/search";
import PerfumeList from "./components/perfumeList";
import About from "./components/about";
import Footer from "./components/footer";

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <PerfumeList></PerfumeList>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App