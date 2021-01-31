import Header from './components/Header'
import './App.css';
import Slider from './components/Slider'
import { SliderData } from './components/SliderData';
import LiveSlider from './components/LiveSlider';
import ContinueSlider from './components/ContinueSlider';
import MomentSlider from './components/MomentSlider'






function App() {
  return (
    <div className="App">
       <Header />
       <Slider slides={SliderData}/>
       <div className = "container mt-5 carousel">
         <h1 className="slide__title">Live Now</h1>
         <LiveSlider />
       </div>
       <div className = "container mt-5 carousel">
         <h1 className="continue__title">Continue Watching</h1>
         <ContinueSlider />
       </div>
       <div className ="container mt-5 carousel">
         <h1 className="slide__title">Moments from the 4th test match</h1>
         <MomentSlider />
       </div>
       <div className="container mt-5 carousel">
         <h1 className="slide__title">Latest Episodes</h1>
       </div>
    </div>
  );
} 

export default App;
