import './Heading.scss';

import match from '../../../utils/match';
import type HeadingProps from './Heading.props';

const Heading = ({
  variant = 'h2',
  children,
  className,
  ...rest
}: HeadingProps<'h1' | 'h2' | 'h3'>) => {
  const Component = variant || 'h2';

  const headingClassName = match(variant, {
    h1: 'heading__h1',
    h2: 'heading__h2',
    h3: 'heading__h3',
    default: '',
  });

  return (
    <Component className={`${headingClassName} ${className || ''}`} {...rest}>
      {children}
    </Component>
  );
};

export default Heading;
