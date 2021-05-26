import React, {Component} from 'react';
import Select from 'react-select';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

class Dropdown extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      fonts: [],
      categories: [],
      sansSerif: [],
      serif: [],
      handwriting: [],
      display: [],
      monospace: []
    }

  }

//Fetches Google Fonts API and sets fonts state to array of all google font family names
  //can later set to object to access and sort by category (i.e. serif)
  componentDidMount(){
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDSHr-iLuL_U335Y437hDvqNFSuv1jAkSI')
      .then(res => {
          return res.json();
      }).then((JSON) => {
        this.setState({
          fonts: JSON.items.map(item => item.family),
          categories: JSON.items.map(item => item.category)
        });
        const sansSerifFonts = [];
        const serifFonts = [];
        const handwritingFonts = [];
        const displayFonts = [];
        const monospaceFonts = [];

        //iterate through fonts array and categorize fonts by type
        for(var i=0; i < this.state.fonts.length; i++){
          if(this.state.categories[i] === "sans-serif"){
            sansSerifFonts.push(this.state.fonts[i]);
          } else if(this.state.categories[i] === "serif"){
            serifFonts.push(this.state.fonts[i]);
          } else if(this.state.categories[i] === "handwriting"){
            handwritingFonts.push(this.state.fonts[i]);
          } else if(this.state.categories[i] === "display"){
            displayFonts.push(this.state.fonts[i]);
          } else if(this.state.categories[i] === "monospace"){
            monospaceFonts.push(this.state.fonts[i]);
          }
        }
        this.setState({
          sansSerif: sansSerifFonts,
          serif: serifFonts,
          handwriting: handwritingFonts,
          display: displayFonts,
          monospace: monospaceFonts
        })
      })
  }




    render(){
        let textType = this.props.textType;

        const sansSerifFonts = this.state.sansSerif.map(family => ({value: family, label: family}));
        const serifFonts = this.state.serif.map(family => ({value: family, label: family}));
        const displayFonts = this.state.display.map(family => ({value: family, label: family}));
        const handwritingFonts = this.state.handwriting.map(family => ({value: family, label: family}));
        const monospaceFonts = this.state.monospace.map(family => ({value: family, label: family}));
        const groupedOptions = [
          {
            label: 'Sans-Serif',
            options: sansSerifFonts
          },
          {
            label: 'Serif',
            options: serifFonts
          },
          {
            label: 'Display',
            options: displayFonts
          },
          {
            label: 'Handwriting',
            options: handwritingFonts
          },
          {
            label: 'Monospace',
            options: monospaceFonts
          }
        ];

        return(
            <form className="textSelectors">
              <label>Choose a {textType} Family:</label>
              <Select value={this.props.value} onChange={this.props.onChange} options={groupedOptions} styles={colourStyles}/>
            </form>
  
        );
    }
}

export default Dropdown;