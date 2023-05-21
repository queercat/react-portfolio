import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material"
import React, { useState } from "react"

import { BackgroundContainer } from "./pages/BackgroundContainer.tsx"
import { ForegroundContainer } from "./pages/ForegroundContainer.tsx"
import { DarkTheme, LightTheme } from "./themes/theme.tsx"

export const App: React.FC = () => {
  /* Check OS theme preference */
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches

  const [theme, setTheme] = useState<Theme>(
    prefersDarkMode ? DarkTheme : LightTheme
  )

  return (
    <ThemeProvider theme={theme}>
      {/* Header Garbage */}
      <CssBaseline />

      {/* Main 'hero' `*/}
      <Box sx={{ height: "100%" }}>
        <BackgroundContainer />
        <ForegroundContainer theme={theme} setTheme={setTheme} />
      </Box>
    </ThemeProvider>
  )
}
