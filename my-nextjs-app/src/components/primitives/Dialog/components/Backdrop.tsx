import type {FC} from 'react';

import {Fade} from '@/components/primitives';

interface BackdropProps {
  open: boolean;
  persist?: boolean;
  onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = ({open, onClick, persist}) => {
  return (
    <Fade in={open}>
      {open ? (
        <div
          className="fixed left-0 top-0 right-0 bottom-0 flex z-30 bg-[#33436b66]"
          onClick={persist ? undefined : onClick}
        />
      ) : null}
    </Fade>
  );
};

export default Backdrop;
