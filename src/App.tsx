
import './App.css'
import Board from './components/board.component'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Header from './components/header.component'
import Footer from './components/footer.component'
import './sass/components/app.styles.scss'

function App() {

  return (
    <Provider store ={store}>
      <div className="app">
        <Header />
        <Board />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
