
import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Btn } from './components/Btn/Btn'
import { Catalog } from './components/Catalog/Catalog'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Catalog/>
    </>
  )
}

export default App
