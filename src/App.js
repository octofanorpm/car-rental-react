import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Components/Pages/Home"
import SearchPage from "./Components/Pages/SearchPage"

const App = () => {
  return (
<Router>
  <Switch>
    <Route path="/search" component={SearchPage} />
    <Route path="/" component={Home} />
  </Switch>
</Router>
  ) 
}
    
export default App