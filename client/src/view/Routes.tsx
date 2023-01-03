import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import TodoList from "./pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/home", "*"].map((path) => {
          return <Route path={path} element={<Auth />} key={path} />;
        })}
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/todo' element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
