import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
// const styles = {
//   border: "1px dotted white",
//   width: "3px",
//   height: "3px",
//   color: "inherit",
//   backgroundColor: "black",
//   boxSizing: "border-box",
//   transform: "scale(11)",
// }
const Dashboard = () => {
  return (
    <div className="flex flex-column" >
      <Link to="/surveys/new" className="w-30 tc center navy hover-green pa3 mv3 no-underline" style={{fontFamily: "Roboto"}}>
        <FontAwesomeIcon  size="3x" icon={faMailBulk} />
        <span className="f6 f4-ns b ml2">SEND EMAILS</span> 
      </Link>
      <div className="cf bg-near-white h-100 w-100 center" >
        <SurveyList/>
      </div>
    </div>
  )
}

export default Dashboard
