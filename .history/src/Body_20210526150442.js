import React, {useState} from 'react';
import Header from './Header';
import TextareaAutosize from 'react-autosize-textarea';


//Renders Header Text -- accepts fontFamily as prop
const HeaderText = ({fontFamily, fontWeight, headerSize}) => {
    const [userInput, setUserInput] = useState('Welcome to FontPal!')

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    } 

        return(
           <TextareaAutosize 
            value={userInput} 
            onChange={handleUserInput} 
            key={fontFamily} 
            spellcheck="false" 
            className="header-text" 
            style={{fontFamily, fontWeight, fontSize: `${headerSize}rem`}}>

            </TextareaAutosize>
        );
}

//Renders Span / Body Text -- accepts fontFamily as prop
const SpanText = ({fontFamily, fontWeight, lineHeight, bodySize}) => {
    const defaultBodyText = "This is a font pairing app for Google Web Fonts. The text on this page is editable, so go ahead and try putting in your own. You can change the font family, size, weight, and line height. You can click on the font category name to collapse the corresponding group in the dropdown (an indicator for this is in the works). Don't forget to check out the pre-loaded background gradients for some extra flare! \n Happy pairing!"
    return(
        <TextareaAutosize 
        spellcheck="false" 
        className="body-text" 
        style={{fontFamily, fontWeight, lineHeight, fontSize: `${bodySize}rem`}}>
            {defaultBodyText}
        </TextareaAutosize>
    );
}


//Combines HeaderText and SpanText into one stylized div
const Body = () => {
    const [headerValue, setHeaderValue] = useState('');
    const [bodyValue, setBodyValue] = useState('');
    const [gradientChoice, setGradientChoice] = useState('blue');
    const [headerLabel, setHeaderLabel] = useState('');
    const [bodyLabel, setBodyLabel] = useState('');
    const [headerFontWeight, setHeaderFontWeight] = useState('700');
    const [bodyFontWeight, setBodyFontWeight] = useState('300');
    const [lineHeight, setLineHeight] = useState('1.5');
    const [headerSize, setHeaderSize] = useState('3');
    const [bodySize, setBodySize] = useState('1.5');



    //Sets font choice for Header text
    const handleHeaderChange = (e) => {
        let fontChoice = e.value;
        setHeaderValue(fontChoice);
        setHeaderLabel(e);
    }


    //Sets font choice for Body text
    const handleBodyChange = (e) => {
        let fontChoice = e.value;
        setBodyValue(fontChoice);
        setBodyLabel(e);
    }
    

    const handleGradientChange = (gradient) => {
        setGradientChoice(gradient.value);
    };

    const headerWeightChange = (weight) => {
        setHeaderFontWeight(weight.value);
    }

    const bodyWeightChange = (weight) => {
        setBodyFontWeight(weight.value);
    }

    //Sets line height for body text
    const handleLineHeightChange = (e) => {
        setLineHeight(e.target.value);
    }

    const handleHeaderSizeChange = (e) => {
        setHeaderSize(e.target.value);
    }

    const handleBodySizeChange = (e) => {
        setBodySize(e.target.value);
    }


    const footerStyle = {
            display: 'block', 
            width: '100%', 
            paddingTop: '100px', 
            paddingBottom: '50px', 
            bottom: '0', 
            fontSize: '.6rem', 
            color: 'white', 
            textTransform: 'uppercase'
    };
        return(
            <div>
                <div className={`body-div ${gradientChoice}`}> 
                    <div style={{display: 'flex', flexDirection: 'row'}}> 
                        <Header 
                            onHeaderChange={handleHeaderChange} 
                            onHeaderWeightChange={headerWeightChange} 
                            onBodyWeightChange={bodyWeightChange} 
                            headerValue={headerValue} 
                            onBodyChange={handleBodyChange} 
                            bodyValue={bodyValue} 
                            onGradientChange={handleGradientChange}
                            onLineHeightChange={handleLineHeightChange}
                            onHeaderSizeChange={handleHeaderSizeChange}
                            onBodySizeChange={handleBodySizeChange}
                            style={{display: 'inline', flexGrow: '1'}}
                        />
                        <div className="preview-area">
                            <HeaderText fontFamily={headerValue} fontWeight={headerFontWeight} headerSize={headerSize}/>
                            <SpanText fontFamily={bodyValue} fontWeight={bodyFontWeight} lineHeight={lineHeight} bodySize={bodySize}/>
                            <div style={footerStyle}>Created by <a href="https://noellered.com" target="_blank">NoelleRed</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default Body;