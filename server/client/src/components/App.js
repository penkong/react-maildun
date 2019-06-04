import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          {/* <Route path="/" exact component={Landing}/>
          <Route path="/surveys" exact component={Dashboard}/>
          <Route path="/surveys/new" exact component={SurveyNew}/>
          <Route path="/sd" exact component={More}/> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
