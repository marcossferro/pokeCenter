import React, { useContext } from "react";
import {useQuery} from "react-query";
import {getItemCategories} from "../queries/items.queries";
import ListadoCategoriasItem from "./ListadoCategoriasItem";
import { ContextoCategorias } from "../context/ContextoCategorias";


const ListadoCategorias = () => {
    const context: IContext | undefined = useContext(ContextoCategorias);
    
    const {
        data: categorias,
        isLoading,
        isError,
    } = useQuery("itemCategories", getItemCategories);

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>
    

    return (
        <div id="listadoCategorias">
            <div>{categorias.map(
                (categoria: ItemCategory ) => <ListadoCategoriasItem categoria={categoria} seleccionarCategoria={(cat)=>{context?.seleccionarCategoria(cat)}}/>
            )}</div>
        </div>
    );
}

export default ListadoCategorias;
