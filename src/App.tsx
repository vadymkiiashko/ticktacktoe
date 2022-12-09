
import './App.css'
import Board from './components/board.component'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store ={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  )
}

export default App
