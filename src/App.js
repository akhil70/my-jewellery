import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Home />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
       
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
