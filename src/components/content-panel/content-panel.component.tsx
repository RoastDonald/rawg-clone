import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { GameCard } from '../game-card/game-card.component';
import { withSpinner } from '../withSpinner/withSpinner.component';
import useMedia from '../../hooks/useMedia';
import { connect } from 'react-redux';
import './content-panel.styles.scss';
import {
  Result,
  HomePageResponse,
} from '../../API_Interfaces/main-page-interfaces';

type ListProps = {
  games: Array<Result> | null;
  parentWidth: number | undefined;
};

type ContentPanelProps = {
  parentWidth: number | undefined;
} & ReturnType<typeof mapStateToProps>;

const ContentPanel = ({ parentWidth, mainPageLink }: ContentPanelProps) => {
  const [data, setData] = useState({} as HomePageResponse);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    axios
      .get(mainPageLink)
      .then((games: AxiosResponse) => {
        const data = games.data as HomePageResponse;
        setData(data);
        setFetching(false);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [mainPageLink]);

  return (
    <ListWithLoader
      games={data.results}
      loading={isFetching}
      parentWidth={parentWidth}
    />
  );
};

const List = ({ games, parentWidth }: ListProps) => {
  const colCount = useMedia(
    [
      '(max-width: 970px)',
      '(max-width: 1024px)',
      '(max-wdith: 1440px)',
      '(min-wdith: 2000px)',
    ],
    [1, 2, 3, 4],
    3
  );

  const colHeihts = new Array(colCount).fill(0);
  const columns: Array<Array<Result>> = new Array(colCount)
    .fill([])
    .map(() => []);

  if (games) {
    games.forEach((game) => {
      const shortestColInx = colHeihts.indexOf(Math.min(...colHeihts));
      columns[shortestColInx].push(game);
      colHeihts[shortestColInx] += 1;
    });
  }

  const proportions: { [key: number]: number } = {
    '1': 0.4,
    '2': 0.5,
    '3': 0.8,
    '4': 1,
  };

  let cardWidth = (parentWidth as number) / colCount;
  return (
    <React.Fragment>
      <div
        className="content-panel-columns"
        style={{
          gridTemplateColumns: `repeat(${colCount},${
            cardWidth * proportions[colCount]
          }px)`,
        }}
      >
        {columns.map((column, key) => (
          <div className="content-panel-column" key={key}>
            {column.map((game) => (
              <GameCard item={game} key={game.id} />
            ))}
          </div>
        ))}
      </div>
      <button className="load-more">
        <span>Load more</span>
      </button>
    </React.Fragment>
  );
};

const ListWithLoader = withSpinner(List);

const mapStateToProps = (
  state: import('../../redux/root-reducer').RootState
) => ({
  mainPageLink: state.mainPage.mainlink,
});

export default connect(mapStateToProps)(ContentPanel);
