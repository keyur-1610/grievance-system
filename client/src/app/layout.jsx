import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "SIH1516 Grievance System",
  description: "AI-based grievance lodging and tracking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
