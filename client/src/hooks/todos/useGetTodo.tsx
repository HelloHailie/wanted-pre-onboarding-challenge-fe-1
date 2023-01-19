import { useQuery } from "@tanstack/react-query";
import TodoAPI from "../../api/todo";
import { AxiosResponse } from "axios";

const useGetTodo = () => {
  return useQuery(["getTodo"], () => TodoAPI.getTodo(), {
    select: (data: AxiosResponse) => {
      return data.data;
    },
  });
};

export default useGetTodo;
