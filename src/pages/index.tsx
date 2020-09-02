import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Page Title</title>
            </Head>

            <div>
                <h1>My Index Page</h1>
            </div>
        </>
    );
}

export default Home;