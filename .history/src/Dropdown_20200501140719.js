import React, {Component} from 'react';
import Select from 'react-select';
import WebFont from 'webfontloader';


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
      monospace: [],
      limit: 100
    }

  }

//Fetches Google Fonts by popularity and sets fonts state to array of all google font family names - limited to 100 by default
  componentDidMount(){
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDSHr-iLuL_U335Y437hDvqNFSuv1jAkSI')
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

        //iterate through fonts array and categorize fonts by type (limited to 100 by default)
        for(var i=0; i < this.state.limit; i++){
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
        for(let i=0; i < this.state.limit; i++){
          WebFont.load({ //loads webfont from Google 
            google: {
                families: [this.state.fonts[i]]
            }
        });
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
      //set each option in dropdown menu to the corresponding font
      const customStyles = {
        option: (styles, { data }) => {
          return {
              ...styles,
              fontFamily: data.fontname,
          };
      },
      }

        let textType = this.props.textType;
        const sansSerifFonts = this.state.sansSerif.map(family => ({[value: family, label: family, fontname: family]}));
        const serifFonts = this.state.serif.map(family => ({value: family, label: family, fontname: family}));
        const displayFonts = this.state.display.map(family => ({value: family, label: family, fontname: family}));
        const handwritingFonts = this.state.handwriting.map(family => ({value: family, label: family, fontname: family}));
        const monospaceFonts = this.state.monospace.map(family => ({value: family, label: family, fontname: family}));
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
              <Select value={this.props.value} onChange={this.props.onChange} options={groupedOptions} styles={customStyles} />
            </form>
  
        );
    }
}

export default Dropdown;