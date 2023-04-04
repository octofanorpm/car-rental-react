import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/Pages/Home"
import SearchPage from "./Components/Pages/SearchPage"
import DetailCar from "./Components/Pages/TestPage"

const App = () => {
  return (
<Router>
  <Switch>
    <Route exact path="/cari-mobil/:carId" component={DetailCar} />
    {/* <Route exact path="/search/detail/:carId" component={DetailCar} /> */}
    <Route exact path="/search" component={SearchPage} />
    <Route path="/" component={Home} />
  </Switch>
</Router>
  ) 
}
    
export default App