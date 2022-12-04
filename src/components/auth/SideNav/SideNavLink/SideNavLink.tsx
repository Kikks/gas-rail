import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Text from '../../../lib/Text';
import type SideNavLinkProps from './SideNavLink.props';

const SideNavLink: FC<SideNavLinkProps> = ({
  icon,
  title,
  url,
  onClick,
  children,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(url);

  return (
    <div className="w-full">
      <Link to={url}>
        <div
          onClick={() => {
            if (onClick) onClick();
          }}
          className={`slide-right group flex cursor-pointer items-center gap-2 rounded-full p-4 ${
            isActive ? 'bg-rails-bg-light' : 'bg-transparent'
          }`}
        >
          <div className="flex flex-1 items-center gap-2">
            <Icon
              className={`text-2xl ${
                isActive ? 'text-primary-main' : 'text-[#8d8d8d]'
              } group-hover:!text-primary-main`}
              icon={icon}
            />
            <Text
              variant="caption"
              className={`font-light ${
                isActive ? 'text-primary-main' : 'text-[#8d8d8d]'
              } group-hover:!text-primary-main`}
            >
              {title}
            </Text>
          </div>

          {isActive && children && children.length > 0 && (
            <Icon
              className="text-2xl text-primary-main"
              icon="mdi:chevron-right"
            />
          )}
        </div>
      </Link>

      {isActive && children && children.length > 0 && (
        <div className="px-8 py-3">
          {children.map((item, index) => (
            <Link to={item.url} key={index}>
              <div className="flex w-full items-center gap-3">
                <div className="relative h-[35px] w-[0.3rem] rounded-full bg-[#eeeaea]">
                  {pathname === item.url && (
                    <div className="absolute top-0 left-0 h-full w-full rounded-full bg-primary-main" />
                  )}
                </div>

                <Text
                  variant="caption"
                  className={`font-light ${
                    pathname === item.url
                      ? 'text-primary-main'
                      : 'text-[#8d8d8d]'
                  } group-hover:!text-primary-main`}
                >
                  {item.title}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNavLink;
