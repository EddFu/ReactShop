import React from 'react';
import Header from '@components/Header.jsx';
import ProductList from '../Containers/ProductList.jsx';

const Home = () => {
    return (
        <>
            <Header />
			
            <ProductList />
		</>
    );
}

export default Home;