"use client";

import { isTokenExpired, isTokenValid } from "@/services/auth-service";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { delay } from "@/utils/utils";
import LogoWithTitle from "@/components/layout/logo-with-title";

const useProtectedRoute = (WrappedComponent, allowedRoles = []) => {
    return function AuthenticatedComponent(props) {
        const [loading, setLoading] = useState(true);
        const [auth, setAuth] = useState(null);

        const router = useRouter();

        const handlePermissions = async () => {
            try {
                await delay(1300);
                if (!allowedRoles.length) return;

                const token = Cookies.get("token");
                if (!token) return router.push("/login"); //TODO: replace /login
                if (!isTokenValid(token) || isTokenExpired(token)) return router.push("/login"); //TODO: replace /login

                const userData = jwtDecode(token.toString());
                setAuth({ token: token, user: userData });

                if (allowedRoles.length && !allowedRoles.includes(userData["role"])) {
                    return router.push("/unauthorized"); //TODO: replace /unauthorized
                }
            } catch (error) {
                router.push("/login"); //TODO: replace /login
            } finally {
                setLoading(false);
            }
        };

        useEffect(() => {
            handlePermissions().then();
        }, []);

        if (loading)
            return (
                <div className="flex h-full w-full flex-1 animate-fade items-center justify-center animate-alternate animate-duration-[1500ms] animate-infinite animate-ease-in">
                    <LogoWithTitle className="self-center" />
                </div>
            );
        return <WrappedComponent {...props} auth={auth} />;
    };
};

export default useProtectedRoute;
