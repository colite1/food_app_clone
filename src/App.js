import Header from './layouts/Header'
import HomeScreen from './components/HomeScreen';
import Footer from './layouts/Footer'
import './App.css';
function App() {
  return (
    <>
    <div className='mobile-message' style={{display:"none"}}>Resize</div>
    <Header/>
    <HomeScreen/>
    <Footer/>
    </>
    
    
  )
}

export default App;
