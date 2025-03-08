import React from 'react'
import Palette from './palette';



const Palettes = (props) => {
  console.log(props.palettes);
  
  const { palettes } = props;

  return (
    <div className="palettes">
      {palettes.map((palette,index) => (
        <Palette key={index} {...palette} />
      ))}
    </div>
  );
};

export default Palettes