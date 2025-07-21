import './App.css'
import ChildComp from './components/ChildComp'
import SecondChild from './components/SecondChild'
import { users } from './data/users'
function App() {
  const name:string = "elene"
  console.log(name)
  
  return (
    <div>
      {/* Since age is a number (not a string), we use curly braces {} */}
      <ChildComp name="elene" age = {21}/>
      <ChildComp name="niko" age = {18}/> 
      <ChildComp name="ioane" age = {24}/>  
      <hr />
      {
        users.map((user) => {
          return <SecondChild name = {user.name} lastName = {user.lastName} isStundent = {user.isStundent} isHardworker = {user.isHardworker}/>
        })
      }
    </div>
  )
}

export default App
