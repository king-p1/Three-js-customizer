import Canvas from "./canvas"
import Home from './pages/Home'
import Customizer from './pages/Customizer'
const App = () => {
  return (
    <main className="app transition-all ease-in">
      
   {/* <h1 className="underline text-red-500">
    Pains
   </h1> */}
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App