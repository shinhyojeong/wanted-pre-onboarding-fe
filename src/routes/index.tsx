import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login, TodoList } from '@pages'
import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<TodoList />} path="/todo" />
        <Route element={<Navigate replace={true} to="/" />} path={'*'} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
