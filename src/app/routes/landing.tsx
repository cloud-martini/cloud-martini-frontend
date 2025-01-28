import { useNavigate } from 'react-router';

import FallingText from '@/blocks/FallingText/FallingText';
import { Head } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <>
      <Head description="Welcome to Cloud Martini" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Cloud Martini</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Welcome to Cloud Martini, a platform for all your cloud computing
            needs.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button onClick={handleStart}>Get Started</Button>
            </div>
          </div>
        </div>
        <FallingText
          text={`Works like a charm in Staging and Preprod, but Production’s like, “Nah, I’m good.”`}
          highlightWords={['Staging', 'Preprod', 'Production']}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </>
  );
};

export default LandingRoute;
