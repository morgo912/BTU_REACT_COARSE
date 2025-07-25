import './App.css'
import FoodCard from './components/FoodCard'
import Pizza from "../src/images/Pizza.svg"
import Pasta from "../src/images/pasta.svg"
import Cake from "../src/images/cake.svg"
import fireIcon from "../src/images/fireIcon.svg"
import { cakeCalorieDetails, cakeCalories, cakeDeg, cakeDescription, cakeNewPrice, cakeOldPrice, cakeTitle, pastaCalorieDetails, pastaCalories, pastaDeg, pastaDescirption, pastaNewPrice, pastaOldPrice, pastaTitle, pizzaCalorieDetails, pizzaCalories, pizzaDeg, pizzaDescription, pizzaNewPrice, pizzaOldPrice, pizzaTitle } from './data/text'
import leafIcon from "../src/images/leafIcon.svg"
function App() {
  return (  
    <div className='w-full min-h-screen flex justify-center items-center bg-[#D8D8D8] gap-[40px]'>
      <FoodCard  img={Pizza} title={pizzaTitle} description={pizzaDescription} calorieAmount = {pizzaCalories} calorieDetails={pizzaCalorieDetails} deg = {pizzaDeg} newPrice = {pizzaNewPrice} oldPrice = {pizzaOldPrice} icons={[
        {
          img:fireIcon,
          background:"orange"
        },
        {
          img:fireIcon,
          background:"green"
        },
        {
          img:fireIcon,
          background:"green"
        }
      ]} />
      
      <FoodCard  img={Pasta} title={pastaTitle} description={pastaDescirption} calorieAmount = {pastaCalories} calorieDetails={pastaCalorieDetails} deg = {pastaDeg} newPrice = {pastaNewPrice} oldPrice = {pastaOldPrice} icons={
        [
          {
            img:leafIcon,
            background:"green"
          },
          {
            img:fireIcon,
            background:"red"
          }
        ]
      }/>
      
      <FoodCard  img={Cake} title={cakeTitle} description={cakeDescription} calorieAmount = {cakeCalories} calorieDetails={cakeCalorieDetails} deg = {cakeDeg} newPrice = {cakeNewPrice} oldPrice = {cakeOldPrice}  icons={
        [
          {
            img:leafIcon,
            background:"green"
          },
          {
            img:fireIcon,
            background:"green"
          }
        ]
      }/>
    </div>
  )
}

export default App
