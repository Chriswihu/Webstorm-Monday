import React from 'react';
import PropTypes from "prop-types";

function Adress(addr) {
    const {city, street, strnr} = addr;
    return (
        <div>
            <h1>Address</h1>
            <p>City: {city}</p>
            <p>Street: {street}</p>
            <p>Street nr.: {strnr}</p>

            {/*<h1>City: Lyngby</h1>*/}
            {/*<h1>Vej: Byvej</h1>*/}
            {/*<h1>Vej nr.: 32</h1>*/}
        </div>
    );
}

Adress.propTypes = {
    address: PropTypes.exact({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        strnr: PropTypes.string.isRequired
    })
}
export default Adress;