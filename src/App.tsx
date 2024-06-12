import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import TodosPage from "./Pages/TodosPage";
import Layout from "./Components/Layout";



function App() {

  return(
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos/:id" element={<TodosPage />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
