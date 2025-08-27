import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "Chenanda",
  description: "kodava okka",
  openGraph: {
    title: "Chenanda",
    description: "kodava okka",
    url: "https://chenanda.in/",
    images: [
      {
        url: "/website-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "chenanda",
      },
    ],
    siteName: "chenanda",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session} refetchInterval={5 * 60}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
