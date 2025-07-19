import './App.css'
import Background from './components/Background'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import Plan from './components/Plan'
import PaymentBtn from './components/PaymentBtn'
import Cancel from './components/Cancel'
function App() {
  return (
    <div>
      <Background />
      <div className='absolute z-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[450px] h-[697px]  bg-[#FFFFFF] rounded-[16px] flex flex-col justify-center items-center'>
        <Image />
        <Title />
        <Description />
        <Plan />
        <PaymentBtn />
        <Cancel />
      </div>
    </div>
  )
}

export default App
