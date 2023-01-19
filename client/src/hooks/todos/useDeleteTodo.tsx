import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoAPI from "../../api/todo";
import { TNavigate } from "../../types/model";

const useDeleteTodo = (navigate: TNavigate) => {
  const queryClient = useQueryClient();

  return useMutation((id: string | undefined) => TodoAPI.deleteTodo(id), {
    onSuccess: () => {
      navigate("/todo/");
      queryClient.invalidateQueries(["getTodo"]);
    },
  });
};

export default useDeleteTodo;
