import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import RouterPages from './components/Router';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Layout>
                <Navbar />
                <RouterPages />
            </Layout>
        </Router>
    );
}

export default App;
