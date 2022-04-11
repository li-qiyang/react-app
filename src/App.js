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
      </header>
    </div>
  );
}
<html>
<head>
<title>This is my first sample Javascript project</title>
<script>
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
</script>
</head>
<body>
    <h1>JavaScript</h1>
    <div id="like_button_container"></div>
    <p id="demo">Click the button below</p>
    <button type="button" onclick="displayDate()">Display Date</button>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="like_button.js"></script>
</body>
</html>
export default App;
