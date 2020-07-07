import React, { useRef, useReducer } from 'react';
import { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as Arrow } from '../../assets/next.svg';
import {
  setOrderFilter,
  setPlatformFilter,
  setBothFilters,
} from '../../redux/games-manager/games-manager.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './filter-button.scss';

enum contentLinks {
  RELEVANCE = 'relevance',
  DATE = 'created',
  NAME = 'ordering',
  RELEASE_DATE = 'released',
  POPULARITY = 'added',
  AVERAGE_RATING = 'rating',

  WEB = '14',
  NINTENDO = '7',
  LINUX = '6',
  APPLE = '5',
  ANDROID = '8',
  IOS = '4',
  XBOX = '3',
  PLAYSTATION = '2',
  PC = '1',
}

type filterButtonProps = {
  type: keyof typeof filterByOptions;
} & ReturnType<typeof mapDispatchToProps>;
type children = Array<{ name: string; link: contentLinks }>;

const filterByOptions = {
  Relevance: {
    dropTitle: false,
    defaultSelected: 'Relevance',
    withCleanup: false,
    title: 'Order by: ',
    items: [
      {
        name: 'Relevance',
        link: contentLinks['RELEVANCE'],
        children: null as children | null,
      },
      {
        name: 'Date added',
        link: contentLinks['DATE'],
        children: null as children | null,
      },
      {
        name: 'Name',
        link: contentLinks['NAME'],
        children: null as children | null,
      },
      {
        name: 'Release date',
        link: contentLinks['RELEASE_DATE'],
        children: null as children | null,
      },
      {
        name: 'Popularity',
        link: contentLinks['POPULARITY'],
        children: null as children | null,
      },
      {
        name: 'Average rating',
        link: contentLinks['AVERAGE_RATING'],
        children: null as children | null,
      },
    ],
  },
  Platforms: {
    dropTitle: true,
    defaultSelected: null,
    withCleanup: true,
    title: 'Platforms',
    items: [
      {
        name: 'PC',
        link: contentLinks['PC'],
        children: null as children | null,
      },
      {
        name: 'PlayStation',
        link: contentLinks['PLAYSTATION'],
        children: [
          { name: 'PlayStation 4', link: contentLinks['NAME'] },
          { name: 'PS Vita', link: contentLinks['NAME'] },
          { name: 'PlayStation 5', link: contentLinks['NAME'] },
        ] as children | null,
      },
      {
        name: 'Xbox',
        link: contentLinks['XBOX'],
        children: [
          { name: 'Xbox One', link: contentLinks['NAME'] },
          { name: 'Xbox Series X', link: contentLinks['NAME'] },
        ] as children | null,
      },
      {
        name: 'iOS',
        link: contentLinks['IOS'],
        children: null as children | null,
      },
      {
        name: 'Android',
        link: contentLinks['ANDROID'],
        children: null as children | null,
      },
      {
        name: 'Apple Macintosh',
        link: contentLinks['APPLE'],
        children: null as children | null,
      },
      {
        name: 'Linux',
        link: contentLinks['LINUX'],
        children: null as children | null,
      },
      {
        name: 'Nintendo',
        link: contentLinks['NINTENDO'],
        children: null as children | null,
      },
      {
        name: 'Web',
        link: contentLinks['WEB'],
        children: null as children | null,
      },
    ],
  },
};

type Action =
  | { type: ActionTypes.SET_OPEN; payload: boolean }
  | { type: ActionTypes.SET_SELECT; payload: string | null }
  | { type: ActionTypes.SET_BOTH; payload: initType };

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

export const FilterButton = ({ type, setOrderFilter }: filterButtonProps) => {
  const filter = filterByOptions[type];
  const initialState = { isOpen: false, select: filter.defaultSelected };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, select } = state;

  const dropdownRef = useRef<HTMLElement | null>(null);

  const cbHandler = (node: any) => {
    if (dropdownRef.current)
      document.removeEventListener('mousedown', handleDropdownClick);
    if (node) document.addEventListener('mousedown', handleDropdownClick);

    dropdownRef.current = node;
  };

  const dropdownRefCB: React.RefCallback<{}> = useCallback(cbHandler, []);

  const renderedContent = () => {
    let withOption = true;
    let option = null;
    if (filter.defaultSelected === select) {
      //init option
      option = filter.defaultSelected;
    } else if (filter.defaultSelected && select) {
      //mutated option
      option = select;
    } else if (select) {
      withOption = false;
      option = select;
    }
    return (
      <>
        <span className="button__title">
          {withOption ? filter.title : option}
        </span>
        {withOption && <span className="button__option">{option}</span>}
      </>
    );
  };
  const handleBtnClick = (): void =>
    dispatch({ type: ActionTypes.SET_OPEN, payload: true });

  const handleDropdownClick = (e: MouseEvent) => {
    if (dropdownRef?.current?.contains(e.target as Node)) return;
    dispatch({ type: ActionTypes.SET_OPEN, payload: false });
  };
  const handleRedirect = (selectedVal: string, linkURL: string) => {
    // if (filter.withCleanup) return setPlatformFilter(linkURL);
    setOrderFilter(linkURL);
    dispatch({
      type: ActionTypes.SET_BOTH,
      payload: { select: selectedVal, isOpen: false },
    });
  };
  return (
    <div className="filter-button-container">
      <button
        className={`filter-button ${
          select && filter.withCleanup ? 'filter-button--active' : ''
        }`}
        onClick={handleBtnClick}
      >
        <div className="filter-button__content">
          {renderedContent()}
          <Arrow className="button__image" />
        </div>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="filter-button-anim"
        unmountOnExit={true}
      >
        <div className="filter-button__dropdown" ref={dropdownRefCB} key={type}>
          <ul className="filter-button__list">
            {filter.dropTitle && (
              <div className="filter-button__list-title">{type}</div>
            )}
            {select && filter.withCleanup && (
              <li
                className="filter-button__list-item filter-button__list-cleanup"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: ActionTypes.SET_SELECT, payload: null });
                }}
              >
                Clear
              </li>
            )}
            {filter.items.map((item) => (
              <li
                key={item.name}
                className="filter-button__list-item"
                onClick={() => handleRedirect(item.name, item.link)}
              >
                <span className="filter-button__list-item-link">
                  <span>{item.name}</span>
                  {select !== item.name ? (
                    <span className="filter-button__list-item--inactive" />
                  ) : (
                    <span className="filter-button__list-item--active" />
                  )}
                </span>
                {item.children && (
                  <div className="filter-button__childs">
                    {item.children.map((child) => (
                      <span
                        key={child.name}
                        className="filter-button__list-item-link"
                      >
                        <div className="filter-button__list-item filter-button__child">
                          {child.name}
                        </div>
                      </span>
                    ))}
                    <div className="filter-button__select-all">Select all</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setOrderFilter: (URL: string) => dispatch(setOrderFilter(URL)),
});

export default connect(null, mapDispatchToProps)(FilterButton);
