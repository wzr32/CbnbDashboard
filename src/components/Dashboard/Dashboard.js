import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />

            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus delectus ad tempora exercitationem asperiores. Aut soluta repellendus perspiciatis! Vero excepturi cupiditate repellendus soluta quos possimus. Impedit, odit vitae dicta debitis repellendus nostrum eveniet quidem perferendis quasi, accusantium architecto maiores blanditiis nam cumque hic consectetur eum. Inventore, odit sit accusantium culpa id impedit adipisci veritatis, vero tempore reiciendis eos nam dolorem quidem perferendis saepe repudiandae nemo delectus facilis placeat excepturi repellat fugiat commodi, error consequuntur? Molestiae voluptate eveniet quas tempore fugit voluptatum soluta est nesciunt natus minima quae ullam ea veritatis fugiat necessitatibus modi, velit mollitia hic delectus dolore consequuntur.
            </div>

            
            {/* <div className="grid-test">
                <div className="grid-test__1">test 1</div>
                <div className="grid-test__2">test 2</div>
                <div className="grid-test__3">test 3</div>
            </div> */}
        </div>
    );
};

export default Dashboard;