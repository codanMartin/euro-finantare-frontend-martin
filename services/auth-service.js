import {jwtDecode} from "jwt-decode";

export const isTokenValid = (token) => {
    return !(!token || !jwtDecode(token.toString()).exp);
}

export const isTokenExpired = (token) => {
    return new Date().getTime() / 1000 > jwtDecode(token.toString()).exp;
}