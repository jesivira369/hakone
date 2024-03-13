import React from 'react';
import { IRoute } from '@hakone/ui-components';
import { Routes, Route } from 'react-router-dom';

export const routes: IRoute[] = [
    {
      path: '/login',
      name: 'Login',
      guard: GuestGuard,
      component: LoginView,
    },
    {
      path: '/',
      name: 'Dashboard',
      guard: AuthGuard,
      component: DashboardView,
      layout: DashboardLayout,
      routes: [
        {
          path: '/',
          name: 'Overview',
          component: DashboardView,
        },
        {
          path: '/dashboard',
          name: 'Overview',
          component: DashboardView,
        },
      ],
    },
  ];

export const renderRoutes = (routes: IRoute[] = []) => {
    return (
      <Routes>
        {routes.map((route, index) => {
          const Guard = route.guard || React.Fragment;
          const Layout = route.layout || React.Fragment;
          const Component = route.component;
          
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            >
              {route.routes ? renderRoutes(route.routes) : null}
            </Route>
          );
        })}
      </Routes>
    );
  };
