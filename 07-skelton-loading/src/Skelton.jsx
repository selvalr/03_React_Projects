import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'

const Skelton = () => {
  console.log('hello');
  
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
  
    <div>
      
     <Skeleton count={30}/> 
     <Skeleton count={50} /> 
        <Skeleton height={40} style={{margin:'1rem 0'}}/>
        <Skeleton count={5}/>
    </div>
    </SkeletonTheme>
  )
}

export default Skelton