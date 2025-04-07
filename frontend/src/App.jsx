/*import { Post } from './Components/CardNew/CardNew';

function App() {
  return (
    <div>
      <Post 
        className="some-class"
        logoClassName="logo-class"
        postClassName="post-class"
      />
    </div>
  );
}

export default App;*/


import React from 'react';
import CardSection from './Components/CardSection/CardSection'
import UploadComponent from './Components/UploadComponent/UploadComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <CardSection />
      <UploadComponent/>
    </div>
  );
}

export default App;