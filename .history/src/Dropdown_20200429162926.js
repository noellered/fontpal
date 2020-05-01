import React, {Component} from 'react';
import Select from 'react-select';



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
        return(    
            // <form className="textSelectors">
            //         <label>Choose a {textType} Family:</label>
            //         <select value={this.props.value} onChange={this.props.onChange}>
            //             {this.state.fonts.map((family) => <option key={family} value={family}> {family} </option>)}
            //         </select>
            // </form>
            // <form className="textSelectors">
            //   <label>Choose a {textType} Family:</label>
            //   <select value={this.props.value} onChange={this.props.onChange}>
            //     <optgroup label="Sans-Serif Fonts">
            //       {this.state.sansSerif.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Serif Fonts">
            //       {this.state.serif.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Display Fonts">
            //       {this.state.display.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Handwriting Fonts">
            //       {this.state.handwriting.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Monospace Fonts">
            //       {this.state.monospace.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //   </select>
            // </form>

            <form className="textSelectors">
              <label>Choose a {textType} Family:</label>
              <Select value={this.props.value} onChange={this.props.onChange} options={{value: 'value', label: 'label'}}/>
            //     <optgroup label="Sans-Serif Fonts">
            //       {this.state.sansSerif.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Serif Fonts">
            //       {this.state.serif.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Display Fonts">
            //       {this.state.display.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Handwriting Fonts">
            //       {this.state.handwriting.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            //     <optgroup label="Monospace Fonts">
            //       {this.state.monospace.map((family) => <option key={family} value={family}> {family} </option>)}
            //     </optgroup>
            // </form>
  
        );
    }
}

export default Dropdown;