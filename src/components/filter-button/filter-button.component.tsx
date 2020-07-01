import React, { createRef, useState, useEffect, useRef } from 'react';
import { Portal } from '../portal/portal.component';
import { findDOMNode } from 'react-dom';
import styles from './filter-button.module.scss';

const { button, content, dropContent, dropBtn } = styles;

interface FilterButtonProps {
  children: React.ReactNode;
}

export const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  const [top, setTop] = useState<undefined | number>(undefined);
  const [left, setLeft] = useState<undefined | number>(undefined);
  const [width, setWidth] = useState<undefined | number>(undefined);

  useEffect(() => {
    const { current } = contentRef;
    if (!current) return;
    setTop(current?.offsetTop);
    setLeft(current?.offsetLeft);
    setWidth(current?.offsetWidth);
    window.addEventListener('mousedown', handleToggle);

    return () => {
      window.removeEventListener('mousedown', handleToggle);
    };
  }, []);

  const handleToggle = (e: Event) => {
    if (!contentRef) return;
    if (
      findDOMNode(contentRef.current) &&
      findDOMNode(contentRef.current)?.contains(e.target as Node)
    ) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className={dropBtn} ref={contentRef}>
      <div className={dropContent}>
        <button className={button}>
          <div className={content}>
            {props.children}
            {toggle && (
              <Portal top={top} left={left} width={width}>
                <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </Portal>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
