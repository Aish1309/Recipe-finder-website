import "./globals.css";

export const metadata = {
  title: "Aish Italian Recipie App",
  description: "Indulge in Italian Cusine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
