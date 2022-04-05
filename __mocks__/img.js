import React from 'react';

const ImageMock = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} />
));

export const ReactComponent = ImageMock;
export default ImageMock;
