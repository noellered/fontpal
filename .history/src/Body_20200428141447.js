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
           <TextareaAutosize value={this.state.userInput} onChange={this.handleUserInput} key={this.props.fontFamily} spellcheck="false" className="header-text" style={{fontFamily: this.props.fontFamily}}></TextareaAutosize>
        );
    }
}

//Renders Span / Body Text -- accepts fontFamily as prop
class SpanText extends Component {
    render(){
        return(
            <TextareaAutosize spellcheck="false" className="body-text" style={{fontFamily: this.props.fontFamily}}>The text on this page is editable. You can try replacing it with your own to see what fonts will look like when paired. All fonts are available as Google WebFonts.</TextareaAutosize>
        );
    }
}


//Combines HeaderText and SpanText into one stylized div
class Body extends Component {

    state = {
        headerValue: '',
        bodyValue: '',
        myGradient: 'blue'
    }

    //Sets font choice for Header text
    handleHeaderChange = (e) => {
        let fontChoice = e.target.value;
        e.preventDefault();
        this.setState({headerValue: fontChoice});
        WebFont.load({ //loads webfont from Google when selected
            google: {
                families: [fontChoice]
            }
        });
    }

    //Sets font choice for Body text
    handleBodyChange = (e) => {
        let fontChoice = e.target.value;
        e.preventDefault();
        this.setState({bodyValue: fontChoice});
        WebFont.load({ //loads webfont from Google when selected can be supplied with font weight
            google: {
                families: [fontChoice]
            }
        });
    }

    //Sets gradient to selected old version
    // handleGradientChange = (e) => {
    //     let selectedGradient = e.target.value;
    //     e.preventDefault();
    //     this.setState({myGradient: selectedGradient});
    // }

    handleGradientChange = selectedOption => {
        this.setState({myGradient: selectedOption});
      };



    render(){

        return(
            <div> 
                <Header onHeaderChange={this.handleHeaderChange} headerValue={this.state.headerValue} onBodyChange={this.handleBodyChange} bodyValue={this.state.bodyValue} onGradientChange={this.handleGradientChange}/>
                <div className={`body-div ${this.state.myGradient}`}> 
                    <HeaderText fontFamily={this.state.headerValue}/>
                    <SpanText fontFamily={this.state.bodyValue} />
                </div>
            </div>
        );
    }
}


export default Body;