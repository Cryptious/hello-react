import React, { Component } from 'react';
import "./header.css";

const judul = {
  color : "orange",
  backgroundColor : "blue",
  marginTop : "50px"
}

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
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value,e){
    e.preventDefault(); // agar tidak terjadi refresh/reloading halaman ketika selesai event
    alert(this.state.daftar);
    alert(value);
  };

  componentDidMount(){
    console.log("Jalan : componentDidMount");
  }

  handleElement(){
    this.setState((state, props) =>{
      return{statusRendering: !state.statusRendering};
    })
  }

  render(){
    console.log("Jalan : Render");
    console.log(this.state.statusRendering);

    return(
      <div>
      {
        // {this.state.statusRendering === true ? (<h1>Selamat Datang </h1>):(<h1>Selamat Tinggal </h1>)} atau
      }
      {this.state.statusRendering ? (
        <div>
          <h1 style={{color : "red", marginTop:"50px" }}>Selamat Datang </h1>
          <h2 style={judul}>Silahkan Pilih Makanan </h2>
        </div>

      ):(
        <div>
        <h1 id="judulKedua">Selamat Tinggal </h1>
        <h2 className="judulInfo">Silahkan datnag kembali </h2>
        </div>

      )}
      <button onClick={this.handleElement}>Change</button>
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
