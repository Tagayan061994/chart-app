import type {FC, PropsWithChildren} from 'react';

import clsx from 'clsx';
import {Fade} from '@/components/primitives';
import {RemoveScroll} from 'react-remove-scroll';
import Portal from '@/components/primitives/Dialog/components/Portal';
import Backdrop from '@/components/primitives/Dialog/components/Backdrop';

interface DialogProps extends PropsWithChildren {
  className?: string;
  open: boolean;
  persist?: boolean;
  fullScreen?: boolean;
  onClose?: () => void;
}

export const Dialog: FC<DialogProps> = ({
  children,
  className,
  open,
  persist,
  fullScreen,
  onClose,
}) => {
  return (
    <Portal>
      {!fullScreen && (
        <Backdrop open={open} persist={persist} onClick={onClose} />
      )}

      <RemoveScroll enabled={open}>
        <Fade in={open}>
          {open && (
            <div
              className={clsx(
                className,
                'fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2',
                'bg-white flex flex-col overflow-hidden shadow-[0_0_10px_#00000029]',
                fullScreen ? 'w-full h-full' : 'rounded-lg'
              )}
              style={{
                maxHeight: fullScreen ? 'calc(100vh - 64px)' : undefined,
              }}
            >
              {children}
            </div>
          )}
        </Fade>
      </RemoveScroll>
    </Portal>
  );
};
