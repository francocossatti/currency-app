import type { Metadata } from "next";
import "../styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';
import CssBaseline from "@mui/material/CssBaseline";
import { InputProvider } from "@/context/InputContext";

export const metadata: Metadata = {
  title: "UYCurrency",
  description: "A Uruguayan currency converter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              <CssBaseline />
                <InputProvider>
                  {children}
                </InputProvider>
           </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
