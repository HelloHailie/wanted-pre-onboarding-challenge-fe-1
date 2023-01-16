import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../view/pages/Auth";
import Todo from "../view/pages/Todo";
import TodoDetail from "../view/pages/TodoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/home", "*"].map((path) => {
          return <Route path={path} element={<Auth />} key={path} />;
        })}
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/todo/:id' element={<TodoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
