import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function Login() {

    return (
        
        <div className="h-screen flex items-center justify-center px-[35%]">
    

                <div className="w-full bg-secondary px-20 py-20 rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                    <div className="w-full flex justify-center">
                        <Image src={"/next.svg"} alt="logo" width={200} height={40}></Image>
                    </div>
                    <div className="w-full text-center py-3">
                        <h1 className="text-xl">Welcome!</h1>
                        <p className="text-sm font-medium text-gray-400">Sign in to continue</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 w-[200px]">
                        <div>
                            <label>Email</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <Input type="password" placeholder="Password" />
                        </div>
                        <Button className="h-11">Sign In</Button>
                    </div>
                    <div className="pt-2">
                        Do you need to <a className="font-medium text-primary">recover your password?</a>
                    </div>
                </div>
        </div>
        

    );
};


