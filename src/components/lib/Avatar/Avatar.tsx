import './Avatar.scss';

import type { FC } from 'react';

import type AvatarProps from './Avatar.props';

const Avatar: FC<AvatarProps> = ({ name, image, className }) => {
  if (image)
    return (
      <figure
        className={`${'avatar__image'} ${
          className || ''
        } relative overflow-hidden`}
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
      </figure>
    );

  if (name)
    return (
      <span className={`${'avatar__name'} ${className || ''}`}>
        {name.length > 3
          ? name
              .split(' ')
              .splice(0, 2)
              .map((item) => item.charAt(0))
              .join('')
          : name}
      </span>
    );

  return (
    <div className={`${'avatar__icon'} ${className || ''}`}>
      <svg
        className={'avatar__icon'}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Avatar;
