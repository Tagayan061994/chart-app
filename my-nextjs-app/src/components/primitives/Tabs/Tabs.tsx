import type {FC, ReactNode, MouseEvent, MutableRefObject} from 'react';

import {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';

interface TabsProps {
  children?: ReactNode;
  className?: string;
  value: string | number;
  onChange: (val: string | number) => void;
}

export const Tabs: FC<TabsProps> = ({children, className, value, onChange}) => {
  const tabsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const tabs = e.currentTarget;
    const tabItems = Array.from(
      tabs.getElementsByClassName('tab')
    ) as HTMLButtonElement[];
    const tab: HTMLButtonElement = e.target as HTMLButtonElement;

    if (tab.value) {
      onChange(tab.value);
    } else {
      const activeTab = tabItems.indexOf(tab);

      if (activeTab !== -1) {
        onChange(activeTab);
      }
    }
  };

  useEffect(() => {
    if (tabsRef.current) {
      const tabItems = Array.from(
        tabsRef.current?.getElementsByClassName('tab')
      ) as HTMLButtonElement[];

      tabItems.forEach((tab) => (tab.ariaSelected = 'false'));
      const activeTab = tabItems.findIndex((tab) => tab.value === value);

      if (activeTab !== -1) {
        setSliderWidth(tabItems[activeTab].offsetWidth);
        setSliderLeft(tabItems[activeTab].offsetLeft);
        tabItems[activeTab].ariaSelected = 'true';
      } else if (typeof value === 'number' && value < tabItems.length) {
        if (!tabItems[value].value) {
          setSliderWidth(tabItems[value].offsetWidth);
          setSliderLeft(tabItems[value].offsetLeft);
          tabItems[value].ariaSelected = 'true';
        }
      }
    }
  }, [value]);

  return (
    <div
      ref={tabsRef}
      className={clsx(className, 'tabs', 'relative flex w-[694px]')}
      onClick={handleClick}
    >
      {children}
      <div
        className={clsx(
          'slider absolute bottom-0',
          'transition-all duration-300',
          'border-b-2 border-b-light-blue'
        )}
        style={{
          width: sliderWidth,
          left: sliderLeft,
        }}
      ></div>
    </div>
  );
};
