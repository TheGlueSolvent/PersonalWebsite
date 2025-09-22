const App: React.FC = () => {
    return (
        <div style={{
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ 
                color: '#06670e', 
                fontSize: '2.5em', 
                marginBottom: '20px' 
            }}>
                Welcome to My Personal Website
            </h1>
            
            <p style={{ 
                fontSize: '1.2em', 
                marginBottom: '30px' 
            }}>
                Your content goes here!
            </p>
        </div>
    );
};

const container = document.getElementById('root');

if (container) {
    if (ReactDOM.createRoot) {
        const root = ReactDOM.createRoot(container);
        root.render(<App />);
    } else {
        ReactDOM.render(<App />, container);
    }
}