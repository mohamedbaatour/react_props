import React from 'react'

const Profile = (props) => {
  return (
    <div className='Text'>
      <h1>{props.fullName}</h1>
          <h2>{props.profession}</h2>
            <button className='button' onClick={() => { props.handleName(`this is ${props.fullName}`) }}>
              Click me
          </button>
          <h3>{props.bio}</h3>
          {props.children}
         
    </div>
  );
    
}

export default Profile