import React, {useState} from 'react';
import FetchFolks from "./Fetching";
import './App.css';

function App() {
  
  const [count, setCount] = useState(1);
  const updateCount = () => setCount(count + 1);
  
  return (
    <div>
      <section>
        <h1>Folks Profile</h1>
        <button onClick={updateCount} className="folks-button-more">Get more Folks (page {count})</button>
        <div className="folks-grid">
        <FetchFolks count={count} />
        </div>
      </section>
    </div>
  );
}

export default App;
