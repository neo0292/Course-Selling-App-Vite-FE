import React, { useState } from 'react'
import { userEmailState } from '../state/selectors/userEmail'
import { useRecoilValue } from 'recoil';


const Appbar = () => {
  const [system, setSystem] = useState(false);
  const userEmail = useRecoilValue(userEmailState);
  {console.log('userEmail value  from appbar:', userEmail);}
  
  return (
    <div>
      

    <div> hello from outside operator</div>

    { userEmail ? <div>hello from if condition true</div>
      : <div> hello from elase cond false value</div> }
    
    
    </div>
    
  )

  // if (userEmail) {
    
  //   return (
      
  //     <div  >Appbarnew hello from if </div>
  //   )
  // } else {
  //   return(
  //   <div> render from else</div>)
  // }
}

export default Appbar

