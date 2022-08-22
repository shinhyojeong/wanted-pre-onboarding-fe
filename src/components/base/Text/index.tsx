import type { ReactElement } from 'react'
import styled from '@emotion/styled'

interface TextProps {
  children: string
  tag?: 'p' | 'span'
  size?: number
  color?: string
  bold?: boolean
  line?: boolean
}

type StyledTextProps = Pick<TextProps, 'size' | 'color' | 'bold' | 'line'>

export const Text = ({
  children,
  tag,
  size = 14,
  color = 'rgba(0, 0, 0, 0.9)',
  bold = false,
  line = false
}: TextProps): ReactElement => {
  return (
    <StyledText as={tag} bold={bold} color={color} line={line} size={size}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.span<StyledTextProps>`
  font-size: ${({ size }): string => `${size}px`};
  color: ${({ color }): string => `${color}`};
  font-weight: ${({ bold }): string => (bold ? 'bold' : 'normal')};
  text-decoration-line: ${({ line }): string => (line ? 'line-through' : '')};
`
