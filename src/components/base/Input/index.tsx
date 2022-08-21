import type { ReactElement } from 'react'
import styled from '@emotion/styled'

type InputType = 'email' | 'text' | 'password'

interface InputProps {
  placeholder?: string
  width?: number
  height?: number
  name: string
  type: InputType
  onChange(): void
}

type StyledInputProps = Pick<InputProps, 'width' | 'height'>

export const Input = ({
  placeholder,
  name,
  width,
  height = 40,
  type,
  onChange
}: InputProps): ReactElement => {
  return (
    <StyledInput
      height={height}
      name={name}
      placeholder={placeholder}
      type={type}
      width={width}
      onChange={onChange}
    />
  )
}

const StyledInput = styled.input<StyledInputProps>`
  padding: 5px 15px;
  width: ${({ width }): string => (width ? `${width}px` : '100%')};
  height: ${({ height }): string => `${height}px`};
  box-sizing: border-box;
  border: solid 2px #dcdcdc;
  border-radius: 10px;
`
