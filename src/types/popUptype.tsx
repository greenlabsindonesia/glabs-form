import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
import { useGlobalContext } from "../context/AppContext";
export type modalType = {
  Icon: React.FC;
  titleMessage: string;
  message: string;
};

export const useModalSuccess = (): modalType => {
  const { state } = useGlobalContext();

  return {
    Icon: () => (
      <FaCircleCheck className="mx-auto mb-4 text-green-500 w-14 h-14 dark:text-green-300" />
    ),
    titleMessage: `${state.message == 'Signed in successfully.' ? 'Login Successful' : 'Registration Successful'}`,
    message: state.message,
  };
};

export const useModalError = (): modalType => {
  const { state } = useGlobalContext();

  return {
    Icon: () => (
      <MdOutlineError className="mx-auto mb-4 text-red-500 w-14 h-14 dark:text-red-300" />
    ),
    titleMessage:`${state.thisRegist ? 'Registration Failed' : 'Login Failed'}`, 
    message: state.message || "Something went wrong",
  };
};
