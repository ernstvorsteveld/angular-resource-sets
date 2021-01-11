import { MenuItem, Icon } from './menu-item';

export const MENU_ITMES: MenuItem[] = [
    {
        id: 1,
        menu: "Client",
        sequence: "01",
        href: new URL("http://localhost:4200/client"),
        icons: {
            before: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
            after: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }
    },
    {
        id: 2,
        menu: "Resource Set",
        sequence: "02",
        href: new URL("http://localhost:4200/resourceset"),
        icons: {
            before: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
            after: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }
    },
    {
        id: 2,
        menu: "Add Resource Set",
        sequence: "03",
        href: new URL("http://localhost:4200/newresourceset"),
        icons: {
            before: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
            after: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }
    }
];