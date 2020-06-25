import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import routes, { IRoute } from '../../app-routes';
import './breadcrumbs.styles.scss';
const Separator: React.FC<{}> = ({ children }) => (
  <span className="breadcrumbs__separator">{children}</span>
);

const fix_withoutParams = (url: string) => {
  const paramIndx = url.indexOf(':');
  return url.slice(0, paramIndx - 1);
};

const renderedCrumbs = (subdirectories: IRoute[]) => (
  <ol style={{ listStyleType: 'none', display: 'flex' }}>
    {subdirectories.map((subdir, key) => (
      <li key={key} className="breadcrumbs__crumb">
        <Link to={fix_withoutParams(subdir.path)}>
          {subdir.name}
          {key + 1 === subdirectories.length ? null : <Separator>/</Separator>}
        </Link>
      </li>
    ))}
  </ol>
);

const BreadCrumbs: React.FC<{}> = () => {
  const currentURL = useLocation();
  const subs = currentURL.pathname.split('/');
  const subdirectories = subs
    .map((sub: string, indx) => {
      if (indx === 0) return routes['home'];
      return routes[sub];
    })
    .filter((sub: IRoute) => sub);
  return <div className="breadcrumbs">{renderedCrumbs(subdirectories)}</div>;
};

export default BreadCrumbs;
