import './App.css'
import Background from './components/Background'
import ContentBack from './components/contentBack'
import Image from './components/Image'
import Title from './components/Title'
import Description from './components/Description'
import AdditionalInfoComp from './components/additionalInfoComp'
function App() {
  return (
    <div>
      <Background />
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-2 rounded-[15px] bg-[#FFFFFF] w-[350px] h-[374px] flex flex-col justify-center items-center'>
        <ContentBack />
        <Image />
        <Title />
        <Description />
        <AdditionalInfoComp />
      </div>
    </div>
  )
}

export default App
