import "./globals.css";
import LinearBackground from "@/components/LinearBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <LinearBackground> */}
          {children}
        {/* </LinearBackground> */}
      </body>
    </html>
  );
}
