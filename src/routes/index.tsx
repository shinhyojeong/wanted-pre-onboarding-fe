import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login, TodoList } from '@pages'
import { AuthLogin } from './AuthRoute'
import { PreventRoute } from './PreventRoute'
import type { ReactElement } from 'react'
// import { AuthLogin } from './PreventRoute'

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLogin />} path="/">
          <Route element={<Login />} path="/" />
        </Route>
        <Route element={<PreventRoute />} path="/">
          <Route element={<TodoList />} path="/todo" />
        </Route>
        <Route element={<Navigate replace to="/" />} path={'*'} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
