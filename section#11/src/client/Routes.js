import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import usersListPage from './pages/usersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...usersListPage,
                path: "/users",
                
            },
            {
                ...NotFoundPage
            }
        ]
    }
];


