import { Navigate } from "react-router";
import "./styles/common.css"

function App() {
  if (localStorage.getItem('jwt')) {
    return (<Navigate to="/userProfile" />);
  }
  return (<Navigate to="/login" />);
}

export default App;
