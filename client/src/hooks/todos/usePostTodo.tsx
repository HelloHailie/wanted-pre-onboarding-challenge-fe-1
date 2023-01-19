import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoAPI from "../../api/todo";
import { ToDoContent, TNavigate } from "../../types/model";

const usePostTodo = (navigate: TNavigate) => {
  const queryClient = useQueryClient();

  return useMutation((data: ToDoContent) => TodoAPI.postTodo(data), {
    onSuccess: (data) => {
      navigate("/todo/");
      queryClient.invalidateQueries(["getTodo"]);
    },
  });
};

export default usePostTodo;
