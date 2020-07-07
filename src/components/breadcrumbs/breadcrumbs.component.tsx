import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './breadcrumbs.styles.scss';

const Breadcrumbs = () => {
  let location = useLocation<{ name: string }>();
  const route = [{ path: '/games/:slug', breadcrumb: location.state.name }];
  const breadcrumbs = useBreadcrumbs(route);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, i) => {
        if (breadcrumbs.length === i + 1) {
          return (
            <span>
              <span
                key="last-item"
                className="breadcrumbs__breadcrumb dis-hov "
              >
                {breadcrumb}
              </span>
            </span>
          );
        }
        return (
          // tslint:disable-next-line: jsx-key
          <React.Fragment>
            <span key={match.url}>
              <NavLink to={match.url} className="breadcrumbs__breadcrumb">
                {breadcrumb}
              </NavLink>
            </span>
            <span className="breadcrumbs__delimitr" key="delimitr">
              /
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
