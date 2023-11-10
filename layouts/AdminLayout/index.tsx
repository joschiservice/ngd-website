import Link from "next/link";
import {GrArticle} from "react-icons/gr"
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

interface Props {
  children: any;
}

const theme = createTheme({ palette: {mode: 'dark'}});

export function AdminLayout({children}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {children}
      </Box>
    </ThemeProvider>
  )
}