
import './App.css'
import {Provider} from 'react-redux'
import store from './components/store'
import Navbar from './components/navbar/Navbar'
import Leaderboard from './components/leaderboard/LeaderBoard'
import Footer from './components/footer/Footer'




function App() {
 

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Leaderboard/>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
