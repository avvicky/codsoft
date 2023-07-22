import "@styles/Globals.css";

export const metadata = {
  title: "Vignesh",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* <script src="node_modules/aos/dist/aos.js"></script> */}</head>
      <body>{children}</body>
    </html>
  );
}
