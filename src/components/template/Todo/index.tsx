import { Button, Text } from '@base'
import type { ReactElement } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'

interface TodoProps extends TodoInfo {
  onDeleteClick(todoId: number): void
  onFinishClick(todoInfo: TodoInfo): void
}

export interface TodoInfo {
  id: number
  todo: string
  isCompleted: boolean
}

export const Todo = ({
  id,
  todo,
  isCompleted,
  onDeleteClick,
  onFinishClick
}: TodoProps): ReactElement => {
  const [finishTodo, setFinishTodo] = useState(isCompleted)

  const handleClickFinish = (): void => {
    onFinishClick({
      id,
      isCompleted: !finishTodo,
      todo
    })
    setFinishTodo(!finishTodo)
  }

  const handleClickDelete = (): void => {
    onDeleteClick(id)
  }

  return (
    <StyledTodo data-id={id}>
      <Text children={todo} line={finishTodo} tag="p" />
      <StyledButtonWrapper>
        <Button
          children="FIN"
          bgColor="#008936"
          fontSize={10}
          height={24}
          radius={5}
          width={30}
          onClick={handleClickFinish}
        />
        <Button
          children="DEL"
          bgColor="#ff0000"
          fontSize={10}
          height={24}
          radius={5}
          width={30}
          onClick={handleClickDelete}
        />
      </StyledButtonWrapper>
    </StyledTodo>
  )
}

const StyledTodo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 3px;
`
