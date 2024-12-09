import { useEffect, useState } from 'react';
import './App.css';
import SkeletonLoader from './Skelton'; // Ensure the correct import for the Skeleton component

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: 'Selva',
        description: 'Hello',
        about: 'What',
      });
      setLoading(false);
    }, 4000);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      {loading ? (
        <SkeletonLoader /> // Show skeleton loader when loading
      ) : (
        <div>
          <h2>{data.title}</h2>
          <h2>{data.description}</h2>
          <h2>{data.about}</h2>
        </div>
      )}
    </>
  );
}

export default App;
