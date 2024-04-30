import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();
export const useRegFormContext = () => {
    return useContext(RegFormContext);
}

const reducer = (state, action) => {
    // { type, data }
    switch (action.type) {
        case 'SET_ADDRES_DATA': {
            return { ...state, address: { ...action.data } };
        }
        case 'SET_VEHICLE_DATA': {
            return { ...state, vehicle: { ...action.data } };
        }
        case 'SET_SERVICE_DATA': {
            return { ...state, service: { ...action.data } };
        }
        case 'SET_ADDONS_DATA': {
            return { ...state, service: { ...action.data } };
        }
        case 'CHANGE_PERCENT': {
            return { ...state, percent: action.data };
        }
    }
    return state;
}

const RegFormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { percent: 0 });

    return <RegFormContext.Provider value={[state, dispatch]}>
        {children}
    </RegFormContext.Provider>
}

export default RegFormProvider;