import React from 'react';
import HomePage from './pages/HomePage';
import usersListPage from './pages/usersListPage';

export default [
    {
        ...HomePage,
        path: "/",
        exact: true
    },
    {
        ...usersListPage,
        path: "/users",
        
    }
];
