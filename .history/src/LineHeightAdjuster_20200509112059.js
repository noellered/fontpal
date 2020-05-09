import React from 'react';
import {spanText} from './Body';

const LineHeightAdjuster = ({
    initialHeight,
    minHeight,
    maxHeight
}) => {
    const lineHeight = initialHeight;
    return(<>
        <spanText lineHeight={lineHeight} />
        <input 
            type="range"
            className="slider"
            min={minHeight}
            max={maxHeight}
            value={lineHeight}
        />
    </>);
};

export default 