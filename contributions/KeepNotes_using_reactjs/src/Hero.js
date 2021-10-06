import React from 'react';
import Notebook from './Notebook';

const Hero = ({help, handleLogout}) => {
    return (
        <Notebook help={help} handleLogout={handleLogout}/>
    );
};

export default Hero;