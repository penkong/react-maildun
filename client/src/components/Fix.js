import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
const Fix = () => {
  return (
    <div className="w-90 w-80-m w-60-l tc bg-washed-blue shadow-3 center hidden br4 mv4 mv5-ns pa3">
      <h1 className="f3 f1-ns blue pa2">Some Consideration</h1>
      <p className="f5 f4-ns measure-narrow tl lh-copy pa3 ml5-l">
        According to some problem from our <span className="b red">REGION</span> we can't use some configuration on <span className="b red">HEROKU</span>.<br/>
        after <span className="b green">Login/Logout</span> maybe you need hard refresh to see changes in <span className="b orange ml2 b">UI.</span>
      </p>
      <Link to="/" className="dib tr green hover-gold no-underline mv3 pa3" style={{fontFamily: "Roboto"}}>
        <FontAwesomeIcon  size="3x" icon={faBackward} /> 
      </Link>
    </div>
  )
}

export default Fix;
