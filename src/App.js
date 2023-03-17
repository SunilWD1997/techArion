import './app.css';
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/landing/Home';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;