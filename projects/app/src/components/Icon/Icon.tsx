import { styled } from "@mui/material"
import React from "react"

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  border: `4px solid ${theme.palette.mode === "dark" ? "#fff" : "#000"}}`,
}))

export const Icon: React.FC<IconProps> = ({ src, alt, ...props }) => {
  return <StyledImage {...props} src={src} alt={alt} />
}
