import Link from "next/link";
import {GrArticle} from "react-icons/gr"
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {SessionProvider} from "next-auth/react";

interface Props {
  children?: any;
}

const theme = createTheme({ palette: {mode: 'dark'}});

export function AdminLayout({children = null}: Props) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          {children}
        </Box>
      </ThemeProvider>
    </SessionProvider>
  )
}