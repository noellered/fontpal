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
        bodyValue: ''
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

    render(){

        return(
            // including CSS here so gradient can be made dynamic later on
            <div> 
                <Header onHeaderChange={this.handleHeaderChange} headerValue={this.state.headerValue} onBodyChange={this.handleBodyChange} bodyValue={this.state.bodyValue} />
                <div className="body-div" style={{color: "white", background: "linear-gradient(25deg, rgba(81,115,233,1) 0%, rgba(49,172,198,1) 62%)"}}> 
                    <HeaderText fontFamily={this.state.headerValue}/>
                    <SpanText fontFamily={this.state.bodyValue} />
                </div>
            </div>
        );
    }
}


export default Body;