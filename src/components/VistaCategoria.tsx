import React, {useContext} from "react";
import {ContextoCategorias} from "../context/ContextoCategorias";
import ListadoItems from "./ListadoItems";

// Documentar
const VistaCategoria = () => {
    const context: IContext | undefined = useContext(ContextoCategorias);
    if (!context?.categoriasState.categoriaSeleccionada) return null;
    const categoria = context?.categoriasState.categoriaSeleccionada;

    return (
        <div id="vistaCategoria">
            <h3 className="titulo">Categoria: {categoria.name}</h3>
            <ListadoItems categoria={categoria} />
        </div>
    )
};

export default VistaCategoria;
