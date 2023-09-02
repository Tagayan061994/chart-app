import {useState, useEffect} from 'react';
import PageLoading from '@/components/PageLoading';
// import PageUnverified from '@/components/PageUnverified';
import NotFound from '@/components/NotFound';

import clsx from 'clsx';

interface AppProps extends React.PropsWithChildren {
  className?: string;
}

const App: React.FC<AppProps> = ({children, className}) => {
  const [userRequested, setUserRequested] = useState(false);

  useEffect(() => {
    if (!userRequested) {
      setUserRequested(true);
    }
  }, [userRequested]);

  return (
    <div
      className={clsx(
        className,
        'flex flex-auto flex-col min-h-screen max-w-full'
      )}
    >
      {'' ? (
        <PageLoading />
      ) : '' ? (
        <NotFound />
      ) : '' ? (
        // <PageUnverified />
        <div>kkkkkk</div>
      ) : (
        children
      )}
    </div>
  );
};

export default App;
