import React from 'react'
import { StyledButton } from './Button.styles'

export const Button = (props) => {

  const {value, onClick} = props

  return (
    <StyledButton onClick={onClick}>{value}</StyledButton>
  )
}
