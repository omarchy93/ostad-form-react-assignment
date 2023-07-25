import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensesPage from "./pages/ExpensesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IncomePage />} />
        <Route path="/byEpens/" element={<ExpensesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
