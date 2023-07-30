import "./globals.css";

export const metadata = {
  title: "Calculator",
  description: "Builded for codsoft intership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width,
                        initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body>
        <div id="wrapper">{children}</div>
      </body>
    </html>
  );
}
