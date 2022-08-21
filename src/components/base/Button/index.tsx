import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  type?: 'button' | 'submit'
  fontSize?: number
  bgColor?: string
  children: string
  value: string
  width?: number
  height?: number
  radius?: number
  onClick(): void
}

type StyledButtonProps = Pick<
  ButtonProps,
  'bgColor' | 'width' | 'height' | 'radius' | 'fontSize'
>

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }): string => `${width}px`};
  height: ${({ height }): string => `${height}px`};
  font-size: ${({ fontSize }): string => `${fontSize}px`};
  background-color: ${({ bgColor = 'black' }): string => bgColor};
  color: white;
  border: none;
  border-radius: ${({ radius }): string => `${radius}px`};
`

export const Button = ({
  children,
  type = 'button',
  bgColor = 'black',
  value,
  width = 50,
  height = 30,
  radius = 10,
  fontSize = 14,
  onClick
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      bgColor={bgColor}
      fontSize={fontSize}
      height={height}
      radius={radius}
      type={type}
      value={value}
      width={width}
      onClick={onClick}>
      {children}
    </StyledButton>
  )
}
