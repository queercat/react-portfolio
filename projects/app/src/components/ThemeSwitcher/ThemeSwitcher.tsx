import { IconButton } from "@mui/material"
import React, { ReactNode } from "react"

interface ThemeSwitcherProps {
  lightIcon: ReactNode
  darkIcon: ReactNode

  theme: "light" | "dark"

  onClick: () => void
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  lightIcon,
  darkIcon,
  onClick,
  theme,
}) => {
  return (
    <IconButton onClick={onClick}>
      {theme === "light" ? lightIcon : darkIcon}
    </IconButton>
  )
}
