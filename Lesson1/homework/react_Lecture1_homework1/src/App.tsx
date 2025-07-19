import './App.css'
import Title from './components/Title'
import Paragraph from './components/Paragraph'
import Image from './components/Image'

function App() {
  return(
    <div className='flex flex-col justify-center items-center w-[315px] h-[484px] bg-white rounded-[15px] gap-[9px]'>  
      <Image />   
      <Title />
      <Paragraph />
    </div>
  )
}

export default App
