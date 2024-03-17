import { Route, Routes } from "react-router-dom";
import { ButtonNavigation } from "./components/ButtonNavigation";
import { Expenses } from "./components/Expenses";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/expenses" Component={Expenses} />
      </Routes>
      <ButtonNavigation></ButtonNavigation>
    </>
  );
}

export default App;
