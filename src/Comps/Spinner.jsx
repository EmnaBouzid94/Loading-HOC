import React, { Component } from 'react';
class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="spinner">
            <img alt="Loading" src="https://www.ipasscontraception.fr/themes/custom/ipasscontraception/images/loader.gif" />
        </div> );
    }
}
 
export default Spinner;