import React, { useState } from 'react';
import { ArrowDown } from './collapsed-items.styles';
interface CollapsedItemsProps {
  count: number;
}

interface ToggleButtonProps {
  text?: string;
  rotation?: number;
  handleClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  text,
  handleClick,
  rotation = 90,
}) => {
  return (
    <li>
      <div className='sidebar__link show-more' onClick={handleClick}>
        <span className='list__icon'>
          <ArrowDown rotate={rotation} />
        </span>
        <span>{text}</span>
      </div>
    </li>
  );
};

export const CollapsedItems: React.FC<CollapsedItemsProps> = ({
  children,
  count,
}) => {
  const [isShowed, triggerToggle] = useState(false);

  const childrenArray = React.Children.toArray(children);
  let fixedArray = [];
  let len = childrenArray.length;
  if (len > count) {
    fixedArray = childrenArray.slice(0, count);
    return !isShowed ? (
      <React.Fragment>
        {fixedArray.map((item) => {
          return item;
        })}
        <ToggleButton
          text='Show all'
          handleClick={() => triggerToggle(!isShowed)}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        {children}
        <ToggleButton
          text='Hide'
          handleClick={() => triggerToggle(!isShowed)}
          rotation={270}
        />
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
