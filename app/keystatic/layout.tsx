import KeystaticApp from "./keystatic";

export const metadata = {
  title: "Keystatic | Dashboard",
};

export default function RootLayout() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <KeystaticApp />
      </body>
    </html>
  );
}
