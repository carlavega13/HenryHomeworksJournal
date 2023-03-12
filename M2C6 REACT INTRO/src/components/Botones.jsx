import React from "react";

class Botones extends React.Component{
    constructor(props){
        super(props)
        console.log(props.modulos.m1);
    }
 
    render(){
        return(
            <div >
                <button onClick={(props)=>alert(this.props.modulos.m1)}>Modulo 1</button>
                <button onClick={(props)=>alert(this.props.modulos.m2)}>Modulo 2</button>
            </div>
        )
    }
}
export default Botones