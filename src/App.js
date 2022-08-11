import './App.css';
import TopBar from './components/TopBar';
import TopCard from './components/Card';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <TopCard />
      <Layout />
    </div>
  );
}

export default App;
