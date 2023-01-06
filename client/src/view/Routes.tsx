import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/home", "*"].map((path) => {
          return <Route path={path} element={<Auth />} key={path} />;
        })}
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
