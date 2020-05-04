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
    constructor(props){
        super(props);
        this.state = {
            headerValue: '',
            bodyValue: '',
            myGradient: 'blue',
            headerLabel: '', //set labels to selected value
            bodyLabel: '',
            expanded: false
        }
        this.toggleExpanded = this.toggleExpanded.bind(this);
      }
      toggleExpanded(){
        this.setState({
        expanded: !this.state.expanded
        })
      }
    
    //Sets font choice for Header text

    handleHeaderChange = (e) => {
        let fontChoice = e.value;
        this.setState({headerValue: fontChoice, headerLabel: e, !expanded: });
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