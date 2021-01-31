import Header from './components/Header'
import './App.css';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="item__container">
          <Item 
           title="Lowest Cost Solar Panel in America"
           desc = "Money-Back Guarantee"
           descLink=''
           backgroundImg={SolarPanels}
           leftBtnTxt = 'ORDER NOW'
           leftBtnLink = ''
           rightBtnTxt = 'LEARN MORE'
           rightBtnLink='true'
           twoButtons='true'
           first
          />
          <Item 
           title="Model S"
           desc="$69,450"
           descLink = ''
           backgroundImg={ModelS}
           leftBtnTxt = 'CUSTOM ORDER'
           leftBtnLink = ''
           rightBtnTxt = 'LEARN MORE'
           rightBtnLink=''
           twoButtons='true'
          /> 
         <Item 
           title="Model 3"
           desc = "Money-Back guarantee"
           descLink = ''
           backgroundImg={Model3}
           leftBtnTxt = 'Custom Order'
           leftBtnLink = ''
           rightBtnTxt = 'LEARN MORE'
           rightBtnLink = ''
           twoButtons='true'
         /> 
         <Item 
           title="Model X"
           desc="Money-Back Guarantee"
           descLink=''
           backgroundImg={ModelX}
           leftBtnTxt = "Custom Order"
           leftBtnLink = ''
           rightBtnTxt = "LEARN MORE"
           rightBtnLink = ''
           twoButtons = 'true'
         />
          <Item 
           title="Model Y"
           desc="Money-Back Guarantee"
           descLink=''
           backgroundImg={ModelY}
           leftBtnTxt = "Custom Order"
           leftBtnLink = ''
           rightBtnTxt = "LEARN MORE"
           rightBtnLink = ''
           twoButtons = 'true'
         />
          <Item 
           title="Solar for New Roofs"
           desc="Money-Back Guarantee"
           descLink=''
           backgroundImg={SolarRoof}
           leftBtnTxt = "ORDER NOW "
           leftBtnLink = ''
           rightBtnTxt = "LEARN MORE"
           rightBtnLink = ''
           twoButtons = 'true'
         />
          <Item 
           title="Accessories"
           desc="Money-Back Guarantee"
           descLink=''
           backgroundImg={Accessories}
           leftBtnTxt = "SHOP NOW "
           leftBtnLink = ''
           rightBtnTxt = "LEARN MORE"
           rightBtnLink = ''
           twoButtons = 'true'
         />

        </div>
    </div>
  );
}

export default App;
