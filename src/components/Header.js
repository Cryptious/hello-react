import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.List,
      statusRendering: true,
      date : new Date()
    };
    this.handlePesan = this.handlePesan.bind(this); //agar alert pada evenet class Handlepesan bisa menggunakan pemanggilan state
  }

  handlePesan(value,e){
    e.preventDefault(); // agar tidak terjadi refresh/reloading halaman ketika selesai event
    alert(this.state.daftar);
    alert(value);
  };

  componentDidMount(){
    console.log("Jalan : componentDidMount");
  }

  render(){
    console.log("Jalan : Render");

    return(
      <div>
        {
          // {this.state.statusRendering === true ? (<h1>Selamat Datang </h1>):(<h1>Selamat Tinggal </h1>)} atau
        }
        {this.state.statusRendering ? (<h1>Selamat Datang </h1>):(<h1>Selamat Tinggal </h1>)}
      </div>
    )

    // return(
    //   <div>
    //     <h2>Makanan Has Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={ (e) => this.handlePesan("Pesan Header", e)}>Halaman Header</a>
    //   </div>
    // );
  }
}
export default Header;
