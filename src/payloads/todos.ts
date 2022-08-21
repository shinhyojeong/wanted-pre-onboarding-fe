export interface GetTodoPayload {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export type GetTodoListPayload = GetTodoPayload[]
