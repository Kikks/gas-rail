import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Heading from '../../components/lib/Heading';
import Text from '../../components/lib/Text';
import { links } from './links';
import type SettingsLayoutProps from './SettingsLayout.props';

const SettingsLayout: FC<SettingsLayoutProps> = ({
  baseUrl = '',
  title,
  children,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="grid w-full gap-10 bg-[#fbece5] p-5">
      {title && (
        <Heading variant="h3" className="text-[#333333]">
          {title}
        </Heading>
      )}

      <div className="flex w-full gap-10 border-b border-[#999999] pb-5">
        {links.map((link) => (
          <Link to={`${baseUrl}${link.url}`}>
            <Text
              variant="caption"
              className={
                pathname.startsWith(`${baseUrl}${link.url}`)
                  ? 'font-bold'
                  : 'hover:underline'
              }
            >
              {link.title}
            </Text>
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
};

export default SettingsLayout;
