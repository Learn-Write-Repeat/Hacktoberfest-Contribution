import React from 'react';

const Header = ({ handleTOggleDarkMode , handleLogout, noteskhali}) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <div className='difference'>
            <button 
                onClick={() =>
                        handleTOggleDarkMode(
                            (previousDarkMode) => !previousDarkMode
                        )        
                }
                className='save'
            >
                Toggle Mode
            </button>
            <button onClick={noteskhali} onClick={handleLogout}  className='save'>Logout</button>
            </div>
            
            
        </div>
    )
};

export default Header;