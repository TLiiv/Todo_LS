import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import { useState } from "react";
import HomePage from "./Pages/HomePage";
import TodosPage from "./Pages/TodosPage";
import Layout from "./Components/Layout";



function App() {

  const [error, setError] = useState<string | null>(null);
  
  return(
    <BrowserRouter>
     <Layout>
      <Routes>
          <Route path="/" element={<HomePage setError={setError} error={error}/>}  />
          <Route path="/todos/:id" element={<TodosPage setError={setError} error={error}/>} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
