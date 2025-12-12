import "./globals.css";
import type { Metadata } from "next/types";
// import LinearBackground from "@/components/LinearBackground";

export const metadata: Metadata = {
	title: "Nymna Technology",
	description: "Nymna is a platform for building educational applications.",
	icons:{		
		icon: [
			{url:"/favicon.ico", sizes:"any"},
		],
	},
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <LinearBackground> */}
          {children}
        {/* </LinearBackground> */}
      </body>
    </html>
  );
}
