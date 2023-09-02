import type {FC} from 'react';

import clsx from 'clsx';
import {Row, Icon} from '@/components/primitives';

import {mdiStar, mdiCheckDecagram} from '@mdi/js';

interface RatingProps {
  value: number;
  reviewCount?: number;
  large?: boolean;
  hasBadge?: boolean;
}

const Rating: FC<RatingProps> = ({value, reviewCount, large, hasBadge}) => {
  return (
    <Row className="gap-x-2 min-w-[132px]">
      <Row align="center" className="gap-x-1">
        <span
          className={clsx('text-dark-blue font-semibold', large && 'text-2xl')}
        >
          {value.toFixed(1)}
        </span>

        <Icon name={mdiStar} color="primary" dense />

        <span className="text-light-blue text-xs">/ out of 5</span>
        {reviewCount && (
          <span className="text-light-blue text-xs">
            / out of {reviewCount} reviews
          </span>
        )}
      </Row>

      {hasBadge && <Icon name={mdiCheckDecagram} color="primary" small />}
    </Row>
  );
};

export default Rating;
