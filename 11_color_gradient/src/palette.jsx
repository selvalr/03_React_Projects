import React from 'react'
import Gradient from './Gradient' 
import AspectRatio from './AspectRatio';


const palette = (props) => {
    const { from, to } = props;
console.log(from);

    return (
      <figure className="palette">
        <AspectRatio>
          <Gradient angle={135} {...props} />
        </AspectRatio>
        <figcaption className="palette__caption" >
          {from} – {to}
        </figcaption>
      </figure>
    );
}

export default palette