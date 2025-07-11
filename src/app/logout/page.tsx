"use client";

import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/use-login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout: React.FC = () => {

    const router = useRouter();
    const {logout} = useLogin();

    useEffect(() => {
        logout();
    }, [])

    return (
        <div>
            <h1>Logout</h1>
            
            <Button onClick={() => router.replace("/login")}>Return to Login</Button>
        </div>
    );
};

export default Logout;