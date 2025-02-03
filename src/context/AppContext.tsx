import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useContext,
  } from "react";
  import { State } from "../types/state";
  
  interface GlobalContextType {
    state: State;
    setState: Dispatch<SetStateAction<State>>;
    stateHandle: (stateKey: string, value: any) => void;
  }
  
  const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
  
  // Props untuk provider
  interface GlobalProviderProps {
    children: ReactNode;
  }
  
  export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [state, setState] = useState<State>({
      toggle:true,
      isActived:false,
      error:false,
      success:false,
      message:"",
      thisRegist:false
    });
    const stateHandle = (stateKey: string, value: any) => {
      setState((prevState) => ({
        ...prevState,
        [stateKey]: value,
      })); 
    };
  
    return (
      <GlobalContext.Provider value={{ state, setState, stateHandle }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  // Custom hook untuk menggunakan GlobalContext
  export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobalContext harus digunakan di dalam GlobalProvider");
    }
    return context;
  };
  