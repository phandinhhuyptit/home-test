import { createContext, useContext } from 'react';
import { Employees  } from "@types/data"

interface AppContextState {
  employees: Employees | null;
}

const AppContext = createContext<AppContextState>({
    employees: null,
});
if (!AppContext) {
    throw new Error(
      "useAppContext has to be used within <AppContext.Provider>"
    );
  }

export const useAppContext = () => useContext(AppContext);

export default AppContext;