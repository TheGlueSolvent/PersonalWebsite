"use strict";
const App = () => {
    return (React.createElement("div", { style: {
            padding: '20px',
            textAlign: 'center'
        } },
        React.createElement("h1", { style: {
                color: '#06670e',
                fontSize: '2.5em',
                marginBottom: '20px'
            } }, "Welcome to My Personal Website"),
        React.createElement("p", { style: {
                fontSize: '1.2em',
                marginBottom: '30px'
            } }, "Your content goes here!")));
};
const container = document.getElementById('root');
if (container) {
    if (ReactDOM.createRoot) {
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(App, null));
    }
    else {
        ReactDOM.render(React.createElement(App, null), container);
    }
}
//# sourceMappingURL=main.js.map