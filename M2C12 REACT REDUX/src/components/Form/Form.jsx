import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import {addProduct} from "../../redux/actions/actions.js"
class Form extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         name: "",
         price: "",
         id: ""
      }
    
   }
   handleSubmit=(e)=>{
         e.preventDefault()
         this.props.addProduct({...this.state,id:Date.now()})
      }

   handleInputChange = (event) => {
    
      this.setState({ ...this.state, [event.target.name]: event.target.value });
   }

   render(){
      return (
         <form onSubmit={this.handleSubmit} className='formBg'>
            <div className='inputBox'>
               <label>Nombre: </label>
               <input
                  name='name'
                  onChange={this.handleInputChange}
                  value={this.state.name}
               />
            </div>
            <div className='inputBox'>
               <label>Precio:</label>
               <input
                  type='number'
                  name='price'
                  onChange={this.handleInputChange}
                  value={this.state.price}
               />
            </div>
            <button className='formBtn'>¡ADD!</button>
            <img src={Caja} alt='' className='logo' />
         </form>
      )
   }
}

export function mapDispatchToProps(dispatch) {
   return{
      addProduct:(product)=>{dispatch(addProduct(product))}
   }
}

export default connect(null, mapDispatchToProps)(Form);
