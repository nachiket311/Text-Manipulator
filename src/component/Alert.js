import React from 'react';

export default function Alert(props) {
  let ara = document.querySelector('.alertmsg');
        if((props.mode)==='lightmode'){
          ara.innerHTML = `${(props.mode)} Enabled`
        }
  return (
    <div>
      <div className='alertarea'>
        <p className='alertmsg'>a</p>
      </div>
    </div>
  );
}
