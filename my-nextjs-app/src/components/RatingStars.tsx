import {Icon} from '@/components/primitives';

import {mdiStar, mdiStarOutline} from '@mdi/js';

const ratings = [1, 2, 3, 4, 5];

interface RatingStarsProps {
  value: number;
  onChange: (valur: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({value, onChange}) => {
  return (
    <div>
      {ratings.map((rating) => (
        <Icon
          key={rating}
          name={rating > value ? mdiStarOutline : mdiStar}
          color="primary"
          className="cursor-pointer"
          onClick={() => onChange(rating)}
        />
      ))}
    </div>
  );
};

export default RatingStars;
