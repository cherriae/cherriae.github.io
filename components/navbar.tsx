"use client"
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Image, NavbarMenu} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon} from "@/components/icons";
import React from "react";


export const Navbar = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
                      className={"flex z-20 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto mt-7 shadow"}>
            <NavbarContent className={"md:mr-[8rem]"}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link className="flex justify-start items-center gap-2 ml-2 flex-shrink-0 mt-1" href="/">
                        <Image
                            width={44}
                            alt={"logo"}
                            src={"/logo.jpg"}
                            className={"flex-shrink-0"}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex md:text-center gap-4 mr-0 lg:mr-[4.5rem]" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="gap-2 flex">
                    <Link isExternal href={siteConfig.links.github} aria-label="Github" className={"hidden lg:flex"}>
                        <GithubIcon className={"text-default-500 m-auto"}/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu
                className="box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col mt-10 fixed w-[300px]">
                <hr className="align-middle border-gray-200 my-2 w-[90%] overflow-x-hidden m-auto"/>
                <div className="flex flex-col p-4 space-y-10 mt-3">
                    <NavbarMenuItem>
                        <Link
                            color="success"
                            className="w-full block main text-2xl text-center"
                            href="/"
                            size="lg"
                        >
                            Home
                        </Link>
                    </NavbarMenuItem>
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className="hover:animate-pulse">
                            <Link
                                // @ts-ignore
                                color={
                                    item.color
                                }
                                className="w-full block main text-2xl text-center"
                                href={item.href}
                                size="lg"
                                onPress={setIsMenuOpen}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <div className="mt-4 w-full flex justify-center items-end space-x-4 align-bottom">
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-default-500"/>
                        </Link>
                        <ThemeSwitch/>
                    </div>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
});

Navbar.displayName = "Navbar"