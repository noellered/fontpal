import React, {Component} from 'react';
import Select from 'react-select';


class Dropdown extends Component {

    render(){
      //set each option in dropdown menu to the corresponding font
      // const customStyles = {
      //   option: (styles, { data }) => {
      //     return {
      //         ...styles,
      //         fontFamily: data.fontname,
      //     };
      // },
      // }

        // let textType = this.props.textType;
        // const sansSerifFonts = this.state.sansSerif.map(family => ({value: family, label: family, fontname: family}));
        // const serifFonts = this.state.serif.map(family => ({value: family, label: family, fontname: family}));
        // const displayFonts = this.state.display.map(family => ({value: family, label: family, fontname: family}));
        // const handwritingFonts = this.state.handwriting.map(family => ({value: family, label: family, fontname: family}));
        // const monospaceFonts = this.state.monospace.map(family => ({value: family, label: family, fontname: family}));
        // const groupedOptions = [
        //   {
        //     label: 'Sans-Serif',
        //     options: sansSerifFonts
        //   },
        //   {
        //     label: 'Serif',
        //     options: serifFonts
        //   },
        //   {
        //     label: 'Display',
        //     options: displayFonts
        //   },
        //   {
        //     label: 'Handwriting',
        //     options: handwritingFonts
        //   },
        //   {
        //     label: 'Monospace',
        //     options: monospaceFonts
        //   }
        // ];
        return(
            <form className="textSelectors">
              <label>Choose a {this.props.textType} Family:</label>
              <Select value={this.props.value} onChange={this.props.onChange} options={this.props.options} styles={this.props.styles} />
            </form>
  
        );
    }
}

export default Dropdown;