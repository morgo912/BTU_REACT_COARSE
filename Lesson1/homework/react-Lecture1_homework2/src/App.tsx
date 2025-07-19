import './App.css'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import AdditionalInfo from './components/AdditionalInfo'
import Profile from './components/Profile'
function App() {
  return (
    <div className='flex flex-col justify-center items-center rounded-[32px]  bg-[#15263F] w-[350px] h-[596px] p-[24px] gap-[24px] parentDiv'>
      <Image />
      <Title />
      <Description />
      <AdditionalInfo />
      <Profile />
    </div>
  )
}

export default App
