import './App.css';
import Homepage from './Pages/Homepage'
import Header from './components/Header'
import Beerslist from './Pages/Beerslist';
import { Routes, Route } from "react-router-dom";
import Singlebeer from './Pages/Singlebeer'
import Newbeer from './Pages/Newbeer'
import Randombeer from './Pages/Randombeer'



function App() {
 

  return (
    <div className="App">
   <Header/>
<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/beerslist" element={<Beerslist/>} />
				<Route path="/randombeer" element={<Randombeer/>} />
				<Route path="/newbeer" element={<Newbeer/>}/>
        <Route path="/beers/:_id" element={<Singlebeer/>}/>


				</Routes>



    </div>
  );
}

export default App;
