interface ItemCategory {
    name: string;
    url: string;
}

interface ListadoCategoriasProps{
    categoria: ItemCategory;
    seleccionarCategoria: (category: ItemCategory)=>void;
}

interface IContext {
    categoriasState: InitialState,
    seleccionarCategoria: (categoria: ItemCategory)=>void,
}
