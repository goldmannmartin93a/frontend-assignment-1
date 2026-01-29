import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import RegistrationPage from '../features/auth/pages/RegistrationPage';
import TodoListPage from '../features/todos/pages/TodoListPage';
import {LoginPage} from '../features/auth/pages/LoginPage';

export const AppRouter = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/todos" element={<TodoListPage />} />
      <Route path="/todos/:" element={<div />} />
    </Routes>
  );
};
