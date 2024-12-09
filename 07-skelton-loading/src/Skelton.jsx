import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonComponent = () => {
  console.log('hello'); // This will log in the console each time the component renders

  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#c0c0c0">
      <div style={{ width: '100%', height: '300px' }}>
        <Skeleton count={3} />
        <Skeleton count={5} />
        <Skeleton height={40} style={{ margin: '1rem 0' }} />
        <Skeleton count={2} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonComponent;
