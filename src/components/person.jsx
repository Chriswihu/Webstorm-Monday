import React from 'react';
import PropTypes from "prop-types";

function Person({person}) {
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.age}</p>
        </div>
    );
}

Person.propTypes = {
    person: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    })
}

export default Person;