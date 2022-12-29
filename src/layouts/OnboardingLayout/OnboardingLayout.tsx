import type { FC } from 'react';

import Navbar from '../../components/onboarding/Navbar';

const OnboardingLayout: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-rails-bg-light">
      <Navbar />

      <main className="w-full flex-1 py-5 px-10">{children}</main>
    </div>
  );
};

export default OnboardingLayout;
