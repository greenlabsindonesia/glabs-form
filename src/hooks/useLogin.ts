import { axiosInstance } from "../lib/axios";
import { LoginSchemaType, loginSchema } from "../schemas/loginSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useGlobalContext } from "../context/AppContext";

const loginUser = async (data: LoginSchemaType) => {
  const response = await axiosInstance.post("/api/v1/auth/sign-in", data);
  return response.data;
};

export const useLogin = () => {
  const { state, stateHandle } = useGlobalContext();
  const toggleHandler = () => stateHandle("toggle", !state.toggle);
  const errorHandler = (value: boolean) => {
    stateHandle("error", value);
    
  }
  const successHandler = (value: boolean) => {

    stateHandle("success", value);
  }
  const messageHandler = (value: string) => stateHandle("message", value);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: (data) => {
      reset();
      messageHandler(data.message);
      toggleHandler();
      successHandler(true);
      errorHandler(false);
    },
    onError: (error: any) => {
      errorHandler(true);
      successHandler(false);
      messageHandler(error.response?.data?.message);
      toggleHandler();
    },
  });
  return {
    register,
    handleSubmit,
    errors,
    reset,
    onSubmit: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.isError,
  };
};
