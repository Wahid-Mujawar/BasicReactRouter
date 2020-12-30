import React from 'react';

const UsersPage = () => {
   return (
      <div>
         <ul>
         {["Tom","Jerry","Bill","Harry"].map((user, idx) => {
            return <li key ={idx} >{user}</li>
         })}
         </ul>
      </div>
   )
}
export default UsersPage;