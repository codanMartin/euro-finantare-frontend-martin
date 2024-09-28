import BI from "@/public/bi-map.png";
import C from "@/public/c-map.png";
import NE from "@/public/ne-map.png";
import NV from "@/public/nv-map.png";
import SE from "@/public/se-map.png";
import SV from "@/public/sv-map.png";
import V from "@/public/v-map.png";
import SM from "@/public/sm-map.png";

export const PROJECT_STATUS = Object.freeze({
    OPENED: "OPENED",
    CLOSED: "CLOSED",
    PENDING: "PENDING"
})

export const PROJECT_STATUS_DISPLAY = Object.freeze({
    [PROJECT_STATUS.OPENED]: "Apel deschis",
    [PROJECT_STATUS.CLOSED]: "Apel inactiv",
    [PROJECT_STATUS.PENDING]: "Apel în consultare"
})

export const LONG_PROJECT_STATUS_DISPLAY = Object.freeze({
    [PROJECT_STATUS.OPENED]: "Finanțare activă - apel deschis",
    [PROJECT_STATUS.CLOSED]: "Finanțare inactivă - apel închis",
    [PROJECT_STATUS.PENDING]: "Finanțare în pregătire / consultare"
})

export const DATE_FORMATS = Object.freeze({
    LONG: "long",
    SHORT: "short"
})

export const MAP_LOCATIONS = Object.freeze({
    NV: "NV", C: "C", NE: "NE", SE: "SE",
    SM: "SM", BI: "BI", SV: "SV", V: "V"
})

export const MAP_LOCATIONS_NAME = Object.freeze({
    [MAP_LOCATIONS.NV]: "Nord-Vest",
    [MAP_LOCATIONS.C]: "Centru",
    [MAP_LOCATIONS.NE]: "Nord Est",
    [MAP_LOCATIONS.SE]: "Sud Est",
    [MAP_LOCATIONS.SM]: "Sud-Muntenia",
    [MAP_LOCATIONS.BI]: "Bucuresti-Ilfov",
    [MAP_LOCATIONS.SV]: "Sud-Vest Oltenia",
    [MAP_LOCATIONS.V]: "Vest"
})

export const MAP_IMAGES = Object.freeze({
    [MAP_LOCATIONS.NV]: NV,
    [MAP_LOCATIONS.C]: C,
    [MAP_LOCATIONS.NE]: NE,
    [MAP_LOCATIONS.SE]: SE,
    [MAP_LOCATIONS.SM]: SM,
    [MAP_LOCATIONS.BI]: BI,
    [MAP_LOCATIONS.SV]: SV,
    [MAP_LOCATIONS.V]: V,
})


