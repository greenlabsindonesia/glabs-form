import { useMutation } from "@tanstack/react-query";
import { RegisterSchemaType, registerSchema } from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/AppContext";
import { axiosInstance } from "../lib/axios";

const registerUser = async (data: RegisterSchemaType) => {
  const response = await axiosInstance.post("/api/v1/auth/sign-up", data);
  console.log(response.data);

  return response.data;
};

export const useRegister = () => {
  const { state, stateHandle } = useGlobalContext();
  
  const toggleHandler = () => stateHandle("toggle", !state.toggle);
  const errorHandler = (value: boolean) => stateHandle("error", value);
  const successHandler = (value: boolean) => stateHandle("success", value);

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
    onSuccess: () => {
      reset();
      toggleHandler();
      successHandler(!state.success);
    },
    onError: () => {
      toggleHandler();
      errorHandler(!state.error);
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
