import React from 'react';
import './Header.css'

const Header = (props) => {
    let  element;
    if(!props.children){
    element = <h1>Sports All League</h1>;
}
    return (
        <div className="banner">
            {
                element
            }
            {
                props.children
            }
        </div>
    );
};

export default Header;