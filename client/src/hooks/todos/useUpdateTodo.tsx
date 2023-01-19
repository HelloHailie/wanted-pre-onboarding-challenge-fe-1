import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoAPI from "../../api/todo";
import { ToDoContentAndId } from "../../types/model";

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: ToDoContentAndId) => TodoAPI.updateTodo(data), {
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries(["getTodo"]);
    },
  });
};

export default useUpdateTodo;
