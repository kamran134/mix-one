import './App.css';
import MixOneFooter from './elements/Footer';
import MixOneHeader from './elements/Header';
import Main from './pages/Main/components';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <MixOneHeader />
        <Main />  
        <MixOneFooter />
      </div>
    </div>
  );
}

export default App;