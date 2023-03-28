import React from 'react';
import PropTypes from 'prop-types';



function User({user}) {
    const {name, email, phone} = user;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

// User.propTypes = {
//     user : PropTypes.object
// };
//
// User.propTypes = {
//     user : PropTypes.object
// };

export default User;