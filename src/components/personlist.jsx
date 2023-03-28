import React from 'react';
import Person from './Person.jsx';
import PropTypes from "prop-types";

function Personlist({persons}) {

    return (
        <div>
            {persons.map(person => <Person person={person}/>)}
        </div>
    );
}

Personlist.propTypes = {
    persons: PropTypes.array.isRequired
}

export default Personlist;