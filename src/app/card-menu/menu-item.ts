export interface Icon {
    icon_path: string;
}

export interface MenuItem {
    id: number;
    sequence: string;
    menu: string;
    href: URL;
    icons: {
        before: string;
        after: string;
    }
}
