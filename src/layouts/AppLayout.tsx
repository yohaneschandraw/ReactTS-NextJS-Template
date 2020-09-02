import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

const AppLayout = ({children}) => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Title</title>
                <meta name="description" content="Content" />
                <meta name="keywords" content="" />

                {/* Logo Icon */}
                <link rel="shortcut icon" href="/img/favicon.png" />

                {/* CSS Vendors */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />

                {/* CSS Assets */}
                <link rel="stylesheet" href="/css/misc.css" />
            </Head>
            
            <div>
                
                {children}
                
                {/* JS Vendors */}
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </div>
        </>
    );
}

export default AppLayout;
