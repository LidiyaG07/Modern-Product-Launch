import './styles/Reset.css'
import './styles/App.css'
import { Btn } from './components/base/btn/Btn'
import { Header } from './components/sections/header/Header'

function App() {

  return (
    <>
      <div>
        <Header />
        <h1>Start</h1>
        <Btn btnText="Button" />
      </div>

    </>
  )
}

export default App
