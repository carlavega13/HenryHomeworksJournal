import { connect } from 'react-redux';
import React from 'react';
import './products.css';
import Card from '../Card/Card'
import {getStoreName} from "../../redux/actions/actions.js"
export function Products(props) {
   React.useEffect(()=>{
props.getStoreName()
   },[])
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{props.storeName}</h1>

            <div className='productsList'>
               {props.list.map((element)=>{
                  return(
                     <Card name={element.name} price={element.price} id={element.id}/>
                  )
               })}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return{
      list : state.list,
      storeName: state.storeName
   }
}

export function mapDispatchToProps(dispatch) {
   return {
   
      getStoreName:()=> dispatch(getStoreName())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);
