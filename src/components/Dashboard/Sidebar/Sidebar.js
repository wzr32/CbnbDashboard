import React from 'react';

const Sidebar = () => {
    return (
        <div className="r-sidebar">
            <input type="checkbox" id="menu"/>

            <div className="sidebar">
                <ul>
                    <li>
                        Admin
                        <label htmlFor="menu">
                            <span></span>
                        </label>
                    </li>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                    <li>item 6</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;