import '../src/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import ListingDetail from './components/Listings/ListingDetail';
import Footer from './components/Footer/Footer';
import Erreur404 from './components/Error404/Error404';

function App() {
  return (
    <div className='App'>
    <div className="main">
    <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/listings/:id' element={<ListingDetail />}/>
        <Route path='*' element={<Erreur404 />} />
    </Routes>
    </div>
    <Footer />

</div>
  );
}

export default App;
