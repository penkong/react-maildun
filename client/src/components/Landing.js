import React from 'react'

const Landing = () => {
  return (
    <div className="w-90 w-80-m w-60-l br4 shadow-3 center hidden bg-white mv2 mv5-ns pa3">
      <h1 className="f2 f1-ns lh-title b blue hover-navy pa2" style={{fontFamily:"Kanit"}}>MAILDUN</h1>
      <p className="dark-blue bg-white bl bb bw2 b--dark-blue f4 f3-ns w-auto br2  pa2 mt2">Send your emails</p>
      <p className="tr orange bg-washed-red f2 lh-copy w-auto br2 pa2 pr4-ns mt2">Simple and Fast</p>
      <p className="red f4 f3-ns br2 pa3 mt2 tracked br bt bw2 b--washed-red">Don't spend your time anymore on convoluted 
      <span className="ml1 f3 f2-ns lh-copy-ns no-wrap">mail sender</span></p>
      <p className="green bg-white br bt bb bw2 b--green f4 f3-ns tc w-auto br2  pa2 mt2">Also we give you 
      <span className="b f2 gold ">10</span> credits on register join us and try</p>
    </div>
  )
}

export default Landing;
