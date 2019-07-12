import React, { Component } from 'react';


class Main extends Component{
  constructor(props){
    super(props);
      this.state = {
        title : "Menu Makanan",
        title2: "Menu Minuman",
        inputValue: "",
        inputKota: ""
      };
      this.rubahData = this.rubahData.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  // Cara menggunakan State
  //1
  // rubahData(){
  //   this.setState({title:"Pilih Makanan"})
  // }

  //2
  rubahData(){
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title
      };
    });
  }; //disarankan menggunakan state arrow function
  // End Cara penulisan State

  handleChange(value, e){
    this.setState({ [value] : e.target.value}); //jika inputan onchange hanya sedikit

    // Jika event on change banyak
    // const eventTarget = e.target.value;
    // this.setState((state, props) =>{
    //   return{
    //     inputValue : eventTarget
    //   };
    // })

    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>

        <br />
        <br />

        <input type="text" value={this.state.inputValue} onChange={ e => this.handleChange("inputValue",e)} placeholder="Name" />
        <input type="text" value={this.state.inputKota} onChange={ e => this.handleChange("inputKota",e)} placeholder="Kota" />
      </div>
    );
  }

};

export default Main;
