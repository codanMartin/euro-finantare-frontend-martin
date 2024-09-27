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


