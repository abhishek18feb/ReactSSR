import React from 'react';
import Home from './components/Home';
import usersList, {loadData} from './components/usersList';

export default [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        loadData,
        path: "/users",
        component: usersList
    }
];
