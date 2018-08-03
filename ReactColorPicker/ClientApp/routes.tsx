import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './components/Main';

export const routes = <Layout>
    <Route exact path='/' component={ Main } />
</Layout>;
