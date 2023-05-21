import { NightsStay } from "@mui/icons-material"
import { LightMode } from "@mui/icons-material"
import { Box, styled, Theme } from "@mui/material"
import React from "react"

import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher.tsx"
import { DarkTheme, LightTheme } from "../themes/theme.tsx"

interface ForegroundContainerProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const StyledContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  padding: theme.spacing(2),
  zIndex: 9999,
}))

export const ForegroundContainer: React.FC<ForegroundContainerProps> = ({
  setTheme,
  theme,
  ...props
}) => {
  const handleThemeChange = (theme: Theme) => {
    if (theme.palette.mode === "dark") {
      setTheme(LightTheme)
    } else {
      setTheme(DarkTheme)
    }
  }

  const darkIcon = <NightsStay sx={{ fontSize: "2rem" }} />
  const lightIcon = <LightMode sx={{ fontSize: "2rem" }} />

  return (
    <StyledContainer {...props}>
      <ThemeSwitcher
        darkIcon={darkIcon}
        lightIcon={lightIcon}
        onClick={() => {
          handleThemeChange(theme)
        }}
        theme={theme?.palette?.mode ?? "light"}
      />
    </StyledContainer>
  )
}
