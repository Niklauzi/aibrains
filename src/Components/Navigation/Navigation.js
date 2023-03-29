import React from 'react';

const Navigation = () => {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
       
          <p className="f3 link dim black underline pa3 pointer"> Home </p>
          <p className="f3 link dim black underline pa3 pointer"> About</p>
          <p className="f3 link dim black underline pa3 pointer"> Link </p>
          <p className="f3 link dim black underline pa3 pointer"> Logout </p>
       
      </nav>
    );
}


export default Navigation;