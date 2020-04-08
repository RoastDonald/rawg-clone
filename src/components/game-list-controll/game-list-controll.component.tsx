import React, { createRef } from 'react';
import './game-list-controll.styles.scss';
import { FilterButton } from '../filter-button/filter-button.component';

export const GameListControll: React.FC = () => {
  return (
    <div className='controll-panel'>
      <div className='controll-left'>
        <div className='controll_buttons'>
          <FilterButton>
            <div className='button__title'>
              <span className='button_item'>Ordered by: </span>
              <span className='ordered-option button_item'>default</span>
            </div>
            <img
              className='button_image'
              src='data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2019%2035%22%20width%3D%2219%22%20height%3D%2235%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M18.414%2016.476l-15-15A2%202%200%2010.586%204.304L14.172%2017.89.586%2031.476a2%202%200%20102.828%202.828l15-15a2%202%200%20000-2.828z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E'
            />
          </FilterButton>

          <FilterButton>
            <div className='button_item'>Platforms</div>
            <img
              className='button_image'
              src='data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2019%2035%22%20width%3D%2219%22%20height%3D%2235%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M18.414%2016.476l-15-15A2%202%200%2010.586%204.304L14.172%2017.89.586%2031.476a2%202%200%20102.828%202.828l15-15a2%202%200%20000-2.828z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E'
            />
          </FilterButton>
        </div>
      </div>

      <div className='controll-right'>
        <div className='display-options'>
          <div>Display options:</div>
          <div className='options'>
            <div
              className='display-option'
              style={{
                backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTYnIGhlaWdodD0nNTYnIHZpZXdCb3g9JzAgMCA1NiA1NicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PHBhdGggZD0nTTYgMGg0NGE2IDYgMCAwMTYgNnY0NGE2IDYgMCAwMS02IDZINmE2IDYgMCAwMS02LTZWNmE2IDYgMCAwMTYtNnonIGlkPSdhJy8+PC9kZWZzPjxnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PG1hc2sgaWQ9J2InIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2EnLz48L21hc2s+PHVzZSBmaWxsPScjRkZGJyBvcGFjaXR5PScuMicgeGxpbms6aHJlZj0nI2EnLz48ZyBtYXNrPSd1cmwoI2IpJyBzdHJva2U9JyNGRkYnPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDguMTY3IDkuMzMzKSc+PHJlY3QgeD0nLjUnIHk9Jy41JyB3aWR0aD0nMTAuNjY3JyBoZWlnaHQ9JzE2LjUnIHJ4PSczJy8+PHJlY3QgeD0nMTQuNScgeT0nLjUnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScyOC41JyB5PScuNScgd2lkdGg9JzEwLjY2NycgaGVpZ2h0PScxNi41JyByeD0nMycvPjxyZWN0IHg9Jy41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScxNC41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScyOC41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48L2c+PC9nPjwvZz48L3N2Zz4=)`,
              }}
            />
            <div
              className='display-option'
              style={{
                backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTYnIGhlaWdodD0nNTYnIHZpZXdCb3g9JzAgMCA1NiA1NicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PHBhdGggZD0nTTYgMGg0NGE2IDYgMCAwMTYgNnY0NGE2IDYgMCAwMS02IDZINmE2IDYgMCAwMS02LTZWNmE2IDYgMCAwMTYtNnonIGlkPSdhJy8+PC9kZWZzPjxnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PG1hc2sgaWQ9J2InIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2EnLz48L21hc2s+PHVzZSBmaWxsPScjRkZGJyBvcGFjaXR5PScuMicgeGxpbms6aHJlZj0nI2EnLz48ZyBtYXNrPSd1cmwoI2IpJyBzdHJva2U9JyNGRkYnPjxyZWN0IHg9JzEnIHk9Jy42NjcnIHdpZHRoPSczMycgaGVpZ2h0PScyOScgcng9JzQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDEwLjUgMTIuODMzKScvPjxyZWN0IHg9JzEnIHk9Jy41JyB3aWR0aD0nMzMnIGhlaWdodD0nMjknIHJ4PSc0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMC41IC0yMCknLz48cmVjdCB4PScxJyB5PScxLjgzMycgd2lkdGg9JzMzJyBoZWlnaHQ9JzI5JyByeD0nNCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTAuNSA0NC42NjcpJy8+PC9nPjwvZz48L3N2Zz4=)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
