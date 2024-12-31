"use client";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {useRouter} from 'next/navigation'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import {PropsWithChildren} from "react";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: Partial<ThemeProviderProps>;
}

export function Providers({children, themeProps}: PropsWithChildren<ProvidersProps>) {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>
                <div className="min-h-screen">
                    {children}
                </div>
            </NextThemesProvider>
        </NextUIProvider>
    );
}
