import logo from './logo.svg';
import './styles/reset.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import DataTestComponent from './components/DataTestComponent';

function App() {
  return (
    <div className="App">
    <Header/>
    {/* <DataTestComponent/> */}
    <MainContent/>
    <Footer/>
    </div>
  );
}

export default App;
