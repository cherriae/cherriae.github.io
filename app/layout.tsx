import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Link} from "@nextui-org/link";
import clsx from "clsx";

export const viewport: Viewport = {
    themeColor: [
        {color: "white"}
    ],
    initialScale: 1,
    width: 'device-width'
}
export const metadata: Metadata = {
    metadataBase: new URL("https://cherriae.github.io"),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/logo.jpg",
        shortcut: "/logo.jpg",
        apple: "/logo.jpg",
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        images: '/logo.jpg',
        url: 'https://cherraie.github.io'
    }
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
            <div className="relative flex flex-col min-h-screen">
                {/* <main className="mx-auto flex-grow"> */}
                    {children}
                {/* </main> */}
                <footer className="w-full py-3 px-6 bg-[#c0cbff]">
                    <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="secondary mb-2 md:mb-0">
                            <span className="font-bold">©2023-2024 Jerry</span>
                        </div>
                        <Link
                            isExternal
                            className="main flex items-center gap-1 text-current"
                            href="https://github.com/cherriae"
                            title="Cherriae"
                        >
                            <span className="secondary">Made and built by</span>
                            <p className="text-primary">Jerry</p>
                        </Link>
                    </div>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}
