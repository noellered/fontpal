import React from 'react';
import {panText} from './Body';

const LineHeightAdjuster = ({
    initialHeight,
    minHeight,
    maxHeight
}) => {
    const lineHeight = initialHeight;
    return(<>
        <SpanText lineHeight={lineHeight} />
        <input 
            type="range"
            className="slider"
            min={minHeight}
            max={maxHeight}
            value={lineHeight}
        />
    </>);
};

export {LineHeightAdjuster};