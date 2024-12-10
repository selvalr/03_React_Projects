import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setData([
        { title: 'Item 1', description: 'This is the description of item 1' },
        { title: 'Item 2', description: 'This is the description of item 2' },
        { title: 'Item 3', description: 'This is the description of item 3' },
      ]);
    }, 3000); // Simulated delay
  }, []);

  return (
    <div className="App">
      <div className="container">
        
        
        {!data ? (
          <div>
             <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton count={3} height={20} width={250} />
            <Skeleton count={3} height={15} width={300} style={{ marginTop: '10px' }} />
            </SkeletonTheme>
          </div>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
