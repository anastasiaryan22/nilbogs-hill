import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignupLogin from './views/SignupLogin';
import ChooseCampaign from './views/ChooseCampaign';
import Campaigns from './views/Campaigns';
import SignupPage from './views/SignupPage';
import OutlineNPC from './views/OutlineNPC';
import ReviewPartyCharacters from './views/ReviewPartyCharacters';
import ChooseRelevantMonsters from './views/ChooseRelevantMonsters';


function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<SignupLogin />}/>
              <Route exact path='/ChooseCampaign' element={<ChooseCampaign/>}/>
              <Route exact path='/Campaigns' element={<Campaigns />}/>
              <Route exact path='/SignupPage' element={<SignupPage />}/>
              <Route exact path='/OutlineNPC' element={<OutlineNPC />}/>
              <Route exact path='/ReviewPartyCharacters' element={<ReviewPartyCharacters />}/>
              <Route exact path='/ChooseRelevantMonsters' element={<ChooseRelevantMonsters />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;