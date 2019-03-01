import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.List
    };
    this.handlePesan = this.handlePesan.bind(this); //agar alert pada evenet class Handlepesan bisa menggunakan pemanggilan state
  }

  handlePesan(value,e){
    e.preventDefault(); // agar tidak terjadi refresh/reloading halaman ketika selesai event
    alert(this.state.daftar);
    alert(value);
  };

  render(){
    return(
      <div>
        <h2>Makanan Has Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={ (e) => this.handlePesan("Pesan Header", e)}>Halaman Header</a>
      </div>
    );
  }
}
export default Header;
