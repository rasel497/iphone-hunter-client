import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Show me all the phone you have!</h2>
            <h4>Users: {phones.length}</h4>
            {
                phones.map(ph => <li><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;