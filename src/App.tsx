import "./App.css";
import {
  useRoutes,
} from "react-router-dom";
import routes from "@routes/index"
import AppContext from "@context/appContext"
import { EMPLOYEE_DATA } from "@constants/index"


function App() {
  const element = useRoutes(routes)
  const { employees } = EMPLOYEE_DATA
  return (
    <AppContext.Provider value={{ employees} }>
    {element}
    </AppContext.Provider>
  );
}

export default App;
