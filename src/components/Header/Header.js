import React from 'react';

const Header = () => {
    return (
        <div className='w-5/6 flex'>
            <div>
            <h4>Headphone</h4>
            <p>For the top band</p>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    );
};

export default Header;