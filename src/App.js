import React, {Component} from 'react';
import Estilo from './components/Estilo';
import Functions from './components/Functions'

class App extends Component {
    constructor() {
        super();
 


        this.state = {
        };
    } 

    render() {
        return (
            <div>
                {/* <Hola nombre="From-APP"/> */}
                {/* <Estilo nombre="Estilo"/> */}
                <Estilo />
                <Functions
                        onContentClear={sasa => {
                                console.log ("content clear", sasa)

                        }} inText="sin holitas"
                 />
            </div>
        )
    }

}

export default App;
