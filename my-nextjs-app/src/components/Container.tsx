import clsx from 'clsx';
import {FC, ReactNode} from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={clsx(className, 'max-w-[1440px] mx-auto px-14')}>
      {children}
    </div>
  );
};

export default Container;
