var React = require("react");
var ReactDom = require("react-dom");

class App extends React.Component {
    render() {
        return (
            <div>App goes here</div>
        );
    }
}

ReactDom.render( 
    <App />,
    document.getElementById("app")
);

