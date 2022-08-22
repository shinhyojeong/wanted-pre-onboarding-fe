import type { MouseEventHandler, ReactElement } from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  fontSize?: number
  bgColor?: string
  children: string
  width?: number
  height?: number
  radius?: number
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

type StyledButtonProps = Pick<
  ButtonProps,
  'bgColor' | 'width' | 'height' | 'radius' | 'fontSize' | 'disabled'
>

export const Button = ({
  children,
  bgColor = 'black',
  width,
  height = 40,
  radius = 10,
  fontSize = 14,
  onClick,
  disabled
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      bgColor={bgColor}
      disabled={disabled}
      fontSize={fontSize}
      height={height}
      radius={radius}
      type="button"
      width={width}
      onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }): string => (width ? `${width}px` : '100%')};
  height: ${({ height }): string => `${height}px`};
  font-size: ${({ fontSize }): string => `${fontSize}px`};
  background-color: ${({ bgColor = 'black' }): string => bgColor};
  color: white;
  border: none;
  border-radius: ${({ radius }): string => `${radius}px`};

  &:disabled {
    background-color: gray;
  }
`
