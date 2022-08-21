import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface TextProps {
  children: string
  tag?: 'p' | 'span'
  size?: number
  color?: string
  bold?: boolean
}

export const Text = ({
  children,
  tag,
  size = 14,
  color = 'rgba(0, 0, 0, 0.9)',
  bold = false
}: TextProps): ReactElement => {
  return (
    <StyledText as={tag} bold={bold} color={color} size={size}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.span<{ color: string; size: number; bold: boolean }>`
  font-size: ${({ size }): string => `${size}px`};
  color: ${({ color }): string => `${color}`};
  font-weight: ${({ bold }): string => (bold ? 'bold' : 'normal')};
`
