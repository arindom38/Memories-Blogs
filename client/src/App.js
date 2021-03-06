import { Container} from "@material-ui/core"
import Navbar from "./Components/Navbar/navbar"
import Home from "./Components/Home/home"
import Auth from "./Components/Auth/auth"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
