import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/Pages/Home"
import SearchPage from "./Components/Pages/SearchPage"
import DetailCar from "./Components/Pages/DetailCar"

const App = () => {
  return (
<Router>
  <Switch>
    <Route exact path="/search/detail" component={DetailCar} />
    <Route exact path="/search" component={SearchPage} />
    <Route path="/" component={Home} />
  </Switch>
</Router>
  ) 
}
    
export default App