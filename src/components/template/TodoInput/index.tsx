import { Button, Input } from '@base'
import type { MouseEvent, ReactElement } from 'react'
import styled from '@emotion/styled'

interface TodoInputProps {
  onAddClick(todo: string): void
}

type HandleAddClick = (e: MouseEvent<HTMLButtonElement>) => void

export const TodoInput = ({ onAddClick }: TodoInputProps): ReactElement => {
  const handleAddClick: HandleAddClick = e => {
    const { form } = e.currentTarget

    if (!form) {
      return
    }

    const todoInput = form[0] as HTMLInputElement
    const todo = todoInput.value
    todoInput.value = ''

    onAddClick(todo)
  }

  return (
    <StyledTodoInput>
      <Input name="addTodo" placeholder="할 일을 입력해 주세요." type="text" />
      <Button children="ADD" radius={3} width={50} onClick={handleAddClick} />
    </StyledTodoInput>
  )
}

const StyledTodoInput = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`
