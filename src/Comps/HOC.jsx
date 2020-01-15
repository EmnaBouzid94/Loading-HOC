import React from "react";
import Spinner from "./Spinner";

const HOC = WrappedComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timeup: true
      };
    
    setTimeout(() => 
        this.setState({timeup:false})
        
    , 2000);  
    }
    render() {
      return (
          this.state.timeup? <Spinner/>:<WrappedComponent/>
      )
    }
    
  };
};

export default HOC;