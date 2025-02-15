import { PureComponent } from "react";

class ThePureComponent extends PureComponent{
    render(){
        console.log('Rendering component...');
        return <h2> Hello I am a Pure Component</h2>
    }
}

export default ThePureComponent;