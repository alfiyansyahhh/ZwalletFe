import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import PageWrapper from 'layout/PageWrapper';
import appRoutes from './appRoutes';
import { IRouteType } from './interface';

const generateRoute = (routes: IRouteType[]): ReactNode => {
  return routes.map((route, index) =>
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && generateRoute(route.child)}
      </Route>
    )
  );
};

export const routes: ReactNode = generateRoute(appRoutes);
