
import './styles/reset.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

import Social from './components/Social';
import Contact from './components/Contact';
import StoreMap from './components/StoreMap';


function App() {
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <Contact/>
    <StoreMap/>

    </div>
  );
}

export default App;
