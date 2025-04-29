import "./css/globals.css";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Home - Portfolio of Toved",
  description: "Portfolio of Toved",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
