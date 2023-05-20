import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import React, { useMemo } from "react"

import { DarkTheme, LightTheme } from "./themes/theme.tsx"

export const App: React.FC = () => {
  /* Check OS theme preference */
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

  const theme = useMemo(() => {
    return prefersDarkMode ? DarkTheme : LightTheme
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}
