import React, { useRef, useReducer } from 'react';
import { useCallback } from 'react';
import { Icons } from '../../assets/icons';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './filter-button.scss';

type filterButtonProps = {
  type: keyof typeof filterByOptions;
};

const filterByOptions = {
  Relevance: {
    dropTitle: false,
    defaultSelected: 'Relevance',
    withCleanup: false,
    title: 'Order by: ',
    option: 'Popularity',
    items: [
      { name: 'Relevance', link: '' },
      { name: 'Date added', link: '' },
      { name: 'Name', link: '' },
      { name: 'Release date', link: '' },
      { name: 'Popularity', link: '' },
      { name: 'Average rating', link: '' },
    ],
  },
  Platforms: {
    dropTitle: true,
    defaultSelected: null,
    withCleanup: true,
    title: 'Platforms',
    option: null,
    items: [
      { name: 'PC', link: '' },
      { name: 'PlayStation', link: '' },
      { name: 'Xbox', link: '' },
      { name: 'iOS', link: '' },
      { name: 'Android', link: '' },
      { name: 'Apple Macintosh', link: '' },
      { name: 'Linux', link: '' },
      { name: 'Nintendo', link: '' },
      { name: 'Web', link: '' },
    ],
  },
};

type Action =
  | { type: ActionTypes.SET_OPEN; payload: boolean }
  | { type: ActionTypes.SET_SELECT; payload: string | null }
  | { type: ActionTypes.SET_BOTH; payload: initType };

const initialState = { isOpen: false, select: null };

type initType = {
  isOpen: boolean;
  select: string | null;
};

enum ActionTypes {
  SET_OPEN,
  SET_SELECT,
  SET_BOTH,
}

const reducer = (prevState: initType, action: Action): initType => {
  switch (action.type) {
    case ActionTypes.SET_OPEN:
      return {
        ...prevState,
        isOpen: action.payload,
      };
    case ActionTypes.SET_SELECT:
      return {
        ...prevState,
        select: action.payload,
      };
    case ActionTypes.SET_BOTH:
      return {
        ...prevState,
        isOpen: action.payload.isOpen,
        select: action.payload.select,
      };
    default:
      return prevState;
  }
};

export const FilterButton = (props: filterButtonProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isOpen, select } = state;
  const dropdownRef = useRef<HTMLElement | null>(null);
  const dropdownRefCB: React.RefCallback<{}> = useCallback((node: any) => {
    if (dropdownRef.current)
      document.removeEventListener('mousedown', handleDropdownClick);
    if (node) document.addEventListener('mousedown', handleDropdownClick);

    dropdownRef.current = node;
  }, []);

  const handleBtnClick = () =>
    dispatch({ type: ActionTypes.SET_OPEN, payload: true });
  const handleDropdownClick = (e: MouseEvent) => {
    if (dropdownRef?.current?.contains(e.target as Node)) return;
    dispatch({ type: ActionTypes.SET_OPEN, payload: false });
  };
  const handleRedirect = useCallback((selectedVal: string) => {
    dispatch({
      type: ActionTypes.SET_BOTH,
      payload: { select: selectedVal, isOpen: false },
    });
  }, []);
  console.log(isOpen);
  const filter = filterByOptions[props.type];
  return (
    <div className="filter-button-container">
      <button className="filter-button" onClick={handleBtnClick}>
        <div className="filter-button__content">
          <span className="button__title">{filter.title}</span>
          <span className="button__option">{filter.option}</span>
          <img className="button__image" src={Icons.ARROW} alt="arrow" />
        </div>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="filter-button-anim"
        >
          {isOpen ? (
            <div
              className="filter-button__dropdown"
              ref={dropdownRefCB}
              key={props.type}
            >
              <ul className="filter-button__list">
                {filter.dropTitle && (
                  <div className="filter-button__list-title">{props.type}</div>
                )}
                {select && filter.withCleanup && (
                  <li
                    className="filter-button__list-item filter-button__list-cleanup"
                    onClick={() =>
                      dispatch({ type: ActionTypes.SET_SELECT, payload: null })
                    }
                  >
                    Clear
                  </li>
                )}
                {filter.items.map((item) => (
                  <li key={item.name} className="filter-button__list-item">
                    <Link
                      to="/"
                      className="filter-button__list-item-link"
                      onClick={() => handleRedirect(item.name)}
                    >
                      <span>{item.name}</span>
                      {select !== item.name ? (
                        <span className="filter-button__list-item--inactive" />
                      ) : (
                        <span className="filter-button__list-item--active" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div />
          )}
        </CSSTransition>
      </button>
    </div>
  );
};

export default FilterButton;
