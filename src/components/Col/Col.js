import React from 'react';

const Col = ({ width, desktopWidth, mobileWidth, tabletWidth, children }) => {
  return (
    <div className={
      `col-xs-${mobileWidth || width} 
      ${tabletWidth && `col-sm-${tabletWidth}`} 
      ${desktopWidth && `col-md-${desktopWidth}`}`
    }>
      {children}
    </div>
  )
}

export default Col;