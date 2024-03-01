import './App.css'
import Header from './components/Header/Header'
import RepeatText from './components/RepeatText/RepeatText'
import List from './components/List/List'
import Counter from './components/Counter/Counter'
import Check from './components/Check/Check'
import Radio from './components/Radio/Radio'
import DropDown from './components/DropDown/DropDown'
import ToDo from './components/ToDo/ToDo'
import ColorBox from './components/ColorBox/ColorBox'


import animals from "../assets/animals.json"
import cars from "../assets/cars.json"
import color from "../assets/color.json"




function App() {
  return (
    <>
      <Header text={"Hello World!"} />
      <RepeatText count={4} text={"Ghayth"} />
      <List animals={animals} />
      <Counter />
      <Check />
      <Radio />
      <DropDown dataCar={cars} />
      <ToDo />
      <DropDown dataCar={cars} />
      <ColorBox dataColor={color} />
    </>
  )
}

export default App
