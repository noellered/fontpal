import React, {Component} from 'react';
import Header from './Header';
import WebFont from 'webfontloader';
import TextareaAutosize from 'react-autosize-textarea';


//Renders Header Text -- accepts fontFamily as prop
class HeaderText extends Component {

    state = {
        userInput: "Change my font and text"
    }

    handleUserInput = (e) => {
        this.setState({userInput: e.target.value});
    } 

    render(){
        return(
           <TextareaAutosize value={this.state.userInput} onChange={this.handleUserInput} key={this.props.fontFamily} spellcheck="false" className="header-text" style={{fontFamily: this.props.fontFamily, fontWeight: this.props.fontWeight}}></TextareaAutosize>
        );
    }
}

//Renders Span / Body Text -- accepts fontFamily as prop
class SpanText extends Component {
    render(){
        return(
            <TextareaAutosize spellcheck="false" className="body-text" style={{fontFamily: this.props.fontFamily, fontWeight: this.props.fontWeight, lineHeight: this.props.lineHeight}}>The text on this page is editable. You can try replacing it with your own to see what fonts will look like when paired. All fonts are available as Google WebFonts.</TextareaAutosize>
        );
    }
}


//Combines HeaderText and SpanText into one stylized div
class Body extends Component {

    state = {
        headerValue: '',
        bodyValue: '',
        myGradient: 'blue',
        headerLabel: '', //set labels to selected value
        bodyLabel: '',
        headerFontWeight: '700',
        bodyFontWeight: '300',
        lineHeight: '1.5'
    }

    //Sets font choice for Header text
    handleHeaderChange = (e) => {
        let fontChoice = e.value;
        this.setState({headerValue: fontChoice, headerLabel: e});
    }


    //Sets font choice for Body text
    handleBodyChange = (e) => {
        let fontChoice = e.value;
        this.setState({bodyValue: fontChoice, bodyLabel: e});
    }
    

    //Sets gradient to selected 
    handleGradientChange = selectedOption => {
        this.setState({myGradient: selectedOption.value});
      };

    //Sets font weight
    headerWeightChange = selectedOption => {
        this.setState({headerFontWeight: selectedOption.value})
    }

    bodyWeightChange = selectedOption => {
        this.setState({bodyFontWeight: selectedOption.value})
    }

    //Sets line height for body text
    handleLineHeightChange = (e) => {
        this.setState(prevState => {lineHeight: e.target.value})
        console.log('line height ', e.target.value);
    }

    render(){

        return(
            <div> 
                <div className={`body-div ${this.state.myGradient}`}> 
                    <Header 
                        onHeaderChange={this.handleHeaderChange} 
                        onHeaderWeightChange={this.headerWeightChange} 
                        onBodyWeightChange={this.bodyWeightChange} 
                        headerValue={this.state.headerValue} 
                        onBodyChange={this.handleBodyChange} 
                        bodyValue={this.state.bodyValue} 
                        onGradientChange={this.handleGradientChange}
                        onLineHeightChange={this.handleLineHeightChange}
                    />
                    <hr/>
                    <HeaderText fontFamily={this.state.headerValue} fontWeight={this.state.headerFontWeight}/>
                    <SpanText fontFamily={this.state.bodyValue} fontWeight={this.state.bodyFontWeight} lineHeight={this.state.lineHeight} />
                </div>
            </div>
        );
    }
}


export default Body;