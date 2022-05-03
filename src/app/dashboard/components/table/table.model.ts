interface Table {
    paginationConfig?: PaginationConfig;
    statusConfig?: StatusConfig;
    columns: Column[];
    attributeName: string[];
    data: any[];
    onClick?: Function;
    actionsList?: Action[];
    actionsListTop?: Action[];
    buttonInHead?: Action;
    styles?: Styles;
}

interface StatusConfig {
    statusForFilter: Status[];
    statusFilterFunction: Function;
}

interface Status {
    name: string;
    class: string;
}

interface PaginationConfig {
    itemsPerPage?: number;
    totalItems: number; // Quantidade total de itens da tabela
    maxSize?: number;
    currentPage?: number;
}

interface Action {
    class: string,
    title: string,
    icon: string,
    onlyIcon?: boolean,
    callback: Function,
    disabled?: boolean,
    name?: string
}

interface Column {
    name: string;
    width?: string,
}

interface Status {
    name: string;
    class: string,
}

interface Styles {
    hover?: boolean,
    headerColor?: string,
    rowColor?: string
}

export { Table, Action, Column, Status, Styles }
