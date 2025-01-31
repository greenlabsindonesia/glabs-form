import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
export type modalType = {
  Icon: React.FC;
  titleMessage: string;
  message: string;
};

export const modalSuccess: modalType = {
  Icon: () => (
    <FaCircleCheck className="mx-auto mb-4 text-green-500 w-14 h-14 dark:text-green-300" />
  ),
  titleMessage: "Registration Successful",
  message: "Please check your email to activate your account",
};

export const modalError: modalType = {
  Icon: () => (
    <MdOutlineError className="mx-auto mb-4 text-red-500 w-14 h-14 dark:text-red-300" />
  ),
  titleMessage: "Registration Failed",
  message: "Please try again",
};
