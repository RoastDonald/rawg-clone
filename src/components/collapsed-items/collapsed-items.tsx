import React, { useState } from 'react';
import { ArrowDown } from './collapsed-items.styles';

type CollapsedItemsProps = {
  count: number;
  children: any;
};
type ToggleButtonProps = {
  text?: string;
  rotation?: number;
  handleClick: () => void;
};

const ToggleButton = ({
  text,
  handleClick,
  rotation = 90,
}: ToggleButtonProps) => {
  return (
    <li className="list__item" key={'collapsed'}>
      <div className="show-more" onClick={handleClick}>
        <span className="list__icon-wrapper">
          <ArrowDown rotate={rotation} className="list__icon" />
        </span>
        <span>{text}</span>
      </div>
    </li>
  );
};

const CollapsedItems = ({ children, count }: CollapsedItemsProps) => {
  const [isShown, triggerToggle] = useState(false);

  const childrenArray = React.Children.toArray(children);
  let fixedArray = [];
  let len = childrenArray.length;
  if (len > count) {
    fixedArray = childrenArray.slice(0, count);
    return !isShown ? (
      <React.Fragment>
        {fixedArray.map((item) => {
          return item;
        })}
        <ToggleButton
          text="Show all"
          handleClick={() => triggerToggle(!isShown)}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        {children}
        <ToggleButton
          text="Hide"
          handleClick={() => triggerToggle(!isShown)}
          rotation={270}
        />
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
export default CollapsedItems;
