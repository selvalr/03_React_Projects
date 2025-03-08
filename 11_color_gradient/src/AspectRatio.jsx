import React from 'react'

const AspectRatio = (props) => {
    const { ratio = 1 / 1, ...otherProps } = props;

    return (
      <div
        className="aspect-ratio"
        style={{ paddingTop: `${100 / ratio}%` }}
        {...otherProps}
      />
    );
}

export default AspectRatio