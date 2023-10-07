
import './styles/reset.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Social from './components/Social';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <Social/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
