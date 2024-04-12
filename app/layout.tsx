import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
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
                "min-h-screen bg-background w-full scroll-smooth",
                fontSans.variable
            )}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
            <Navbar/>
            <main className="px-0">
                {children}
            </main>
            <footer className="relative bottom-0 w-full flex py-3 p-6 text-start">
                <div className={"secondary container items-start justify-start md:ml-12"}>
                    <span className={"font-bold"}>©2023-2024 Jerry</span>
                </div>
                <Link
                    isExternal
                    className="main flex justify-items-end gap-1 text-current"
                    href="https://github.com/cherriae"
                    title="Cherriae"
                >
                    <span className={"secondary"}>Made by</span>
                    <p className="text-primary">Jerry</p>
                </Link>
            </footer>
        </Providers>
        </body>
        </html>
    );
}
