import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="bg-near-white h-100 w-100 center">
      <div className="tc pa4 w-10 h-auto center">
        <Link to="/surveys/new" className="br-100 pa2 h3 w5 bg-red hover-bg-green white link fw8 f4">
          Send mass emails
        </Link>
      </div>
      <SurveyList/>
    </div>
  )
}

export default Dashboard
