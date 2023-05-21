import { Box, styled, useTheme } from "@mui/material"
import React from "react"

interface BackgroundContainerProps {}

const StyledContainer = styled(Box)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: -1,
}))

const StyledBox = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "flex-end",
}))

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  ...props
}) => {
  const theme = useTheme()

  return (
    <StyledContainer {...props}>
      <StyledBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
        >
          <path
            fill={theme.palette.mode === "dark" ? "#fff" : "#000"}
            fillOpacity="1"
            d="M0,32L60,48C120,64,240,96,360,138.7C480,181,600,235,720,250.7C840,267,960,245,1080,234.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </StyledBox>
    </StyledContainer>
  )
}
