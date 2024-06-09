import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import TablePage from "./pages/Table";
import FormPage from "./pages/Form";

import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<Login />} path="/login" />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<TablePage />}></Route>
          <Route path="form" element={<FormPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
