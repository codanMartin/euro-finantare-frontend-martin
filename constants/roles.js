// roles.js
export const roles = {
    admin: {
        canAccess: ['/admin', '/dashboard', '/settings'],
    },
    user: {
        canAccess: ['/dashboard'],
    },
    guest: {
        canAccess: ['/login', '/register'],
    },
};
