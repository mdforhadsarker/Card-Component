import React from 'react';
import Sticky from 'react-stickynode';
import { useAppState } from 'Contexts/app/AppProvider';
import { LayoutWrapper } from './layout.style';

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  // deviceType: { mobile, tablet, desktop },
  token
}) => {
  const isSticky = useAppState('isSticky');

  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Sticky enabled={isSticky} innerZ={1001}></Sticky>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
