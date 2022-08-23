import { Todo, TodoInput } from '@template'
import { useEffect, useState } from 'react'
import type { GetTodoListPayload } from 'payloads'
import type { ReactElement } from 'react'
import styled from '@emotion/styled'
import { todoApi } from '@api/apis'
import type { TodoInfo } from '@template'

export const TodoList = (): ReactElement => {
  const [todos, setTodos] = useState<GetTodoListPayload>([])

  useEffect(() => {
    getTodoList()
  }, [])

  const getTodoList = async (): Promise<void> => {
    try {
      const { data } = await todoApi.getTodo()
      setTodos(data)
    } catch (e) {
      console.warn(e)
    }
  }

  const handleAddTodo = async (todo: string): Promise<void> => {
    try {
      const { data } = await todoApi.createTodo(todo)
      setTodos([...todos, data])
    } catch (e) {
      console.warn(e)
    }
  }

  const handleDeleteClick = async (todoId: number): Promise<void> => {
    try {
      await todoApi.deleteTodo(todoId)
      const nextTodos = todos.filter(({ id }) => id !== todoId)
      setTodos(nextTodos)
    } catch (e) {
      console.warn(e)
    }
  }

  const handleFinishClick = async ({
    id,
    todo,
    isCompleted
  }: TodoInfo): Promise<void> => {
    await todoApi.updateTodo({ id, isCompleted, todo })
  }

  return (
    <StyledTodoList>
      <TodoInput onAddClick={handleAddTodo} />
      <StyledTodos>
        {todos.map(({ id, isCompleted, todo }) => (
          <Todo
            key={id}
            id={id}
            isCompleted={isCompleted}
            todo={todo}
            onDeleteClick={handleDeleteClick}
            onFinishClick={handleFinishClick}
          />
        ))}
      </StyledTodos>
    </StyledTodoList>
  )
}

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border: solid 1px #e3e3e3;
  border-radius: 10px;
  padding: 30px 20px;
  height: 450px;
  overflow: scroll;
`

const StyledTodos = styled.ul``
