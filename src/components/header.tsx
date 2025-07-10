"use client";
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, LogOutIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation';

export default function Header() {

    const router = useRouter();

    const onClickHandler = () => {
        console.log("Login out...");
        router.push("/login");

    }

    return (
        <div id="app-header" className="w-full bg-primary flex py-2 px-10">
            <div className="flex-1">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                            <NavigationMenuItem>
                        <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                <Link href="/admin/users">
                                    <div className="font-medium">Users</div>
                                </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                <Link href="/admin/companies">
                                    <div className="font-medium">Companies</div>
                                </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                <Link href="/admin/reports">
                                    <div className="font-medium">Reports</div>
                                </Link>
                                </NavigationMenuLink>
                            </li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/report">Reports</Link>
                        </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div>
                <Button onClick={onClickHandler}>
                    <LogOutIcon/>
                </Button>
            </div>
        </div>
    )
}