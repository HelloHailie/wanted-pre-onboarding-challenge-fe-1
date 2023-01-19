import axiosInstance from "./axiosInstance";
import { ToDoContent, ToDoContentAndId } from "../types/model";

const TodoAPI = {
  getTodo: () => {
    return axiosInstance.get("/todos");
  },
  postTodo: (data: ToDoContent): Promise<ToDoContent> => {
    return axiosInstance.post("/todos", data);
  },
  updateTodo: ({ id, data }: ToDoContentAndId): Promise<ToDoContentAndId> => {
    return axiosInstance.put(`/todos/${id}`, data);
  },
  deleteTodo: (id: string | undefined) => {
    return axiosInstance.delete(`/todos/${id}`);
  },
};

export default TodoAPI;
