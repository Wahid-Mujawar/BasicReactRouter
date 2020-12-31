import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
   return (
      <div>
         <h3>Basic React Router (Multi-Pages-Apps)</h3>
         <h2>Main Page</h2>
         <Link to="/users">Show List Of Users</Link>
      </div>
   )
}

export default MainPage;