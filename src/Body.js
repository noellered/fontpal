import React, {useState} from 'react';
import Header from './Header';
import TextareaAutosize from 'react-autosize-textarea';


//Renders Header Text -- accepts fontFamily as prop
const HeaderText = ({ fontFamily, fontWeight, headerSize }) =>{
    const [userInput, setUserInput] = useState("Welcome to FontPal!")


    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    } 

        return(
           <TextareaAutosize value={userInput} onChange={handleUserInput} key={fontFamily} spellcheck="false" className="header-text" style={{fontFamily: fontFamily, fontWeight: fontWeight, fontSize: `${headerSize}rem`}}></TextareaAutosize>
        );
}

//Renders Span / Body Text -- accepts fontFamily as prop
const SpanText = ({fontFamily, lineHeight, fontWeight, bodySize}) => {
        const defaultText = "This is a font pairing app for Google Web Fonts. The text on this page is editable, so go ahead and try putting in your own. You can change the font family, size, weight, and line height. You can click on the font category name to collapse the corresponding group in the dropdown (an indicator for this is in the works). Don't forget to check out the pre-loaded background gradients for some extra flare! \n \nAs noted above, this is a Beta version. Features are constantly being added, so check back now and then to see what cool new features you can play around with. Happy pairing!"
        return(
            <TextareaAutosize spellcheck="false" className="body-text" style={{fontFamily: fontFamily, fontWeight: fontWeight, lineHeight: lineHeight, fontSize: `${bodySize}rem`}}>{defaultText}</TextareaAutosize>
        );
}


//Combines HeaderText and SpanText into one stylized div
const Body = () => {
    const [headerValue, setHeaderValue] = useState("Rubik");
    const [bodyValue, setBodyValue] = useState("Open Sans");
    const [myGradient, setMyGradient] = useState("blue");
    const [headerLabel, setHeaderLabel] = useState("");
    const [bodyLabel, setBodyLabel] = useState("");
    const [headerFontWeight, setHeaderFontWeight] = useState('700');
    const [bodyFontWeight, setBodyFontWeight] = useState('300');
    const [lineHeight, setLineHeight] = useState('1.5');
    const [headerSize, setHeaderSize] = useState('3');
    const [bodySize, setBodySize] = useState("1.5");



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
    

    //Sets gradient to selected 
    const handleGradientChange = selectedOption => {
        setMyGradient(selectedOption.value);
      };

    //Sets font weight
    const headerWeightChange = selectedOption => {
        setHeaderFontWeight(selectedOption.value);
    }

    const bodyWeightChange = selectedOption => {
        setBodyFontWeight(selectedOption.value);
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


        return(
            <div>
                <div className={`body-div ${myGradient}`}> 
                    <div style={{display: 'flex', flexDirection: 'row'}}> 
                        <Header 
                            onHeaderChange={handleHeaderChange} 
                            onHeaderWeightChange={headerWeightChange} 
                            onBodyWeightChange={bodyWeightChange} 
                            headerSize={headerSize}
                            lineHeight={lineHeight}
                            headerValue={headerValue} 
                            onBodyChange={handleBodyChange} 
                            bodyValue={bodyValue} 
                            gradientValue={myGradient}
                            headerFontWeight={headerFontWeight}
                            bodyFontWeight={bodyFontWeight}
                            onGradientChange={handleGradientChange}
                            onLineHeightChange={handleLineHeightChange}
                            onHeaderSizeChange={handleHeaderSizeChange}
                            onBodySizeChange={handleBodySizeChange}
                            bodySize={bodySize}
                            style={{display: 'inline', flexGrow: '1'}}
                        />
                        <div className="preview-area">
                            <HeaderText fontFamily={headerValue} fontWeight={headerFontWeight} headerSize={headerSize}/>
                            <SpanText fontFamily={bodyValue} fontWeight={bodyFontWeight} lineHeight={lineHeight} bodySize={bodySize}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default Body;