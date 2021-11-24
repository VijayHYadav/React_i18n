import defaultContext from "./defaultContext";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};