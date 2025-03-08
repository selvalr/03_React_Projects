import React from 'react'

const Gradient = (props) => {
    const { angle = 0, from, to } = props;

    return (
      <div
        style={{
          backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`
        }}
      />
    );
}

export default Gradient