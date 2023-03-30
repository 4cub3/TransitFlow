import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
   <Route path='/'>
      <Homepage/>
   </Route>
  );
}

export default App;
