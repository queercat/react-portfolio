import { styled } from "@mui/material"
import React from "react"

interface IconProps {
  src: string
  alt: string
}

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  border: `4px solid ${theme.palette.mode === "dark" ? "#fff" : "#000"}}`,
}))

export const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
}
