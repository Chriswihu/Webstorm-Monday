import React from 'react';
import PropTypes from 'prop-types';
import User from "./User.jsx";

function Userlist({users}) {
    return (
        <div>
            {users.map (user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

// Userlist.propTypes = {
//     users: PropTypes.array.isRequired
// }

export default Userlist;