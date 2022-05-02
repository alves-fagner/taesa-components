interface Table {
    columns: Column[];
    attributeName: string[];
    data: any[];
    onClick?: Function;
    actionsList?: Action[];
    styles?: Styles;
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
