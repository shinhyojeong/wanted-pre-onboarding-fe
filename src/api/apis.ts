import type {
  GetTodoListPayload,
  GetTodoPayload,
  GetUserPayload
} from 'payloads'
import type { SignOption, TodoOption } from './instance'
import { instance } from './instance'

type UpdateTodoOption = Pick<GetTodoPayload, 'id' | 'todo' | 'isCompleted'>

export const authApi = {
  signIn: (userInfo: SignOption): Promise<{ data: GetUserPayload }> =>
    instance.post('/auth/signin', userInfo),
  signUp: (userInfo: SignOption): Promise<{ data: GetUserPayload }> =>
    instance.post('/auth/signup', userInfo)
}

export const todoApi = {
  createTodo: (todo: TodoOption): Promise<GetTodoPayload> =>
    instance.post('/todos', todo),
  deleteTodo: (todoId: number): Promise<void> =>
    instance.delete(`/todos/${todoId}`),
  getTodo: (): Promise<GetTodoListPayload> => instance.get('/todos'),
  updateTodo: ({
    todo,
    id,
    isCompleted
  }: UpdateTodoOption): Promise<GetTodoPayload> =>
    instance.put(`/todos/${id}`, { isCompleted, todo })
}
