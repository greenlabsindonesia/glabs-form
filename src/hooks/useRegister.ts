import { useMutation } from "@tanstack/react-query";
import { RegisterSchemaType, registerSchema } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/AppContext";
import { axiosInstance } from "../lib/axios";


const registerUser = async (data: RegisterSchemaType) => {
  const response = await axiosInstance.post("/api/v1/auth/sign-up", data);
  return response.data;
};

export const useRegister = () => {
  const { state, stateHandle } = useGlobalContext();
  
  const toggleHandler = () => stateHandle("toggle", !state.toggle);
  const errorHandler = (value: boolean) => stateHandle("error", value);
  const successHandler = (value: boolean) => stateHandle("success", value);
  const messageHandler = (value: string) => stateHandle("message", value);
  const regist = (value:boolean)=> stateHandle("thisRegist", value);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
    onSuccess: (data) => {
      reset();
      messageHandler(data.message);
      toggleHandler();
      successHandler(true);
      errorHandler(false);
    },
    onError: (error:any) => {
      messageHandler(error.response?.data?.message);
      console.log(error.response?.data?.message);
      toggleHandler();
      regist(true);
      errorHandler(true);
      successHandler(false);
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    onSubmit: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
