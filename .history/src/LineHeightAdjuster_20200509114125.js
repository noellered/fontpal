import React from 'react';
import {SpanText} from './Body';

const LineHeightAdjuster = ({
    initialHeight,
    minHeight,
    maxHeight
}) => {
    const lineHeight = initialHeight;
    return(<>
        <SpanText fontFamily={this.props.bodyValue} fontWeight={this.state.bodyFontWeight} lineHeight={lineHeight} />
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