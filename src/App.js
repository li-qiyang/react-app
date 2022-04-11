import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 classname="App-title">Welcome to React</h1>
　　　　<body>Reactのウエルコム画面です</body>
        <a
          className="App-link"
          href="https://github.com/IKI-Li/react-test"
          target="_white"
          rel="noopener noreferrer"
        >
          デプロイ情報の詳細はこちら
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
