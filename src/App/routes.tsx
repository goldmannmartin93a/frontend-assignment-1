import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import RegistrationPage from '../features/auth/pages/RegistrationPage';
import TodoListPage from '../features/todos/pages/TodoListPage';
import {LoginPage} from '../features/auth/pages/LoginPage';
import TodoDetailPage from '../features/todos/pages/TodoListDetailPage';

export const AppRouter = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/todos" element={<TodoListPage />} />
    <Route path="/todos/:id" element={<TodoDetailPage />} />
  </Routes>
);
