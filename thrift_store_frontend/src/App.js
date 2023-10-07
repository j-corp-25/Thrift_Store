import logo from './logo.svg';
import './styles/reset.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import MainPage from './components/MainPage';
import Social from './components/Social';
// import DataTestComponent from './components/DataTestComponent';

function App() {
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App;
