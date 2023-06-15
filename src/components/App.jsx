import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { lazy } from 'react';
import TodoPage from 'pages/TodoPage/TodoPage';
import CreateTodoPage from 'pages/CreateTodoPage/CreateTodoPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LogInPage from 'pages/LogInPage/LogInPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const UsersPage = lazy(() => import('pages/UsersPage/UsersPage'));
const UserDateilsPage = lazy(() =>
  import('pages/UserDateilsPage/UserDateilsPage')
);
const Todos = lazy(() => import('./Todos/Todos'));
const Posts = lazy(() => import('./Posts/Posts'));

function App() {
  return (
    <Routes>
      <Route
        path="/registration"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LogInPage />
          </PublicRoute>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route path="users/:id" element={<UserDateilsPage />}>
          <Route path="todos" element={<Todos />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route
          path="todo"
          element={
            <PrivateRoute>
              <TodoPage />
            </PrivateRoute>
          }
        />
        <Route path="create/todo" element={<CreateTodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
