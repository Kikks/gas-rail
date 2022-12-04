import type { FC } from 'react';

import Heading from '../Heading';
import Text from '../Text';
import type StatCardProps from './StatCard.props';

const StatCard: FC<StatCardProps> = ({
  className,
  customTitleComponent,
  customValueComponent,
  percentage,
  subtitle,
  title,
  value,
  variant = 'accent',
}) => {
  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl p-5 lg:p-5 ${
        // eslint-disable-next-line no-nested-ternary
        variant === 'accent'
          ? 'bg-primary-light'
          : variant === 'white'
          ? 'bg-white'
          : 'bg-[#DEDEDE]'
      } ${className || ''}`}
    >
      {customTitleComponent || <Text className="font-semibold">{title}</Text>}

      <div className="flex w-full items-center justify-between">
        {customValueComponent ? (
          { customValueComponent }
        ) : (
          <Heading variant="h3">{value}</Heading>
        )}

        {percentage && (
          <div className="flex items-center gap-1">
            <Text variant="caption" className="font-light">
              {percentage >= 0 ? `+${percentage}` : percentage}%
            </Text>

            <figure className="h-5 w-5">
              <img
                className="h-full w-full object-contain"
                src={
                  percentage > 0
                    ? '/assets/icons/rise.svg'
                    : '/assets/icons/fall.svg'
                }
                alt={percentage > 0 ? 'Rise' : 'Fall'}
              />
            </figure>
          </div>
        )}
      </div>

      {subtitle && (
        <div className="-mt-2">
          <Text variant="caption" className="text-rails-dark-gray/70">
            {subtitle}
          </Text>
        </div>
      )}
    </div>
  );
};

export default StatCard;
