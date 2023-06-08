import React, { Reducer, useReducer } from "react";

// Interfaces
interface InitialState{
    categoriaSeleccionada: ItemCategory | null;
}

type ActionType = 'SELECCIONAR_CATEGORIA';

interface Action {
    type: ActionType;
    payload: {
        category: ItemCategory
    }
}

// Debemos tipar nuestro estado inicial.
const initialState = {
    categoriaSeleccionada: null,
};

const reducer: Reducer<InitialState, Action> = ( state: InitialState, action: Action ) => {
    // Implementar el reducer
    switch ( action.type ) {
        case 'SELECCIONAR_CATEGORIA': 
        return {...state, categoriaSeleccionada: action.payload.category};
    }
    return state;
};

export const ContextoCategorias = React.createContext<IContext | undefined>(undefined)

const ProviderCategorias: React.FC = ({ children }) => {
    const [categoriasState, dispatch] = useReducer(reducer, initialState);
    

    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (category: ItemCategory) => {
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: {
                category
            },
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriasState,
                seleccionarCategoria,
            }
        }>
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;