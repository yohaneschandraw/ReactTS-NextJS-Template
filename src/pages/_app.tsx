// Global import css / js
import 'aos/dist/aos.css';
import '../styles/app.scss';

import { useRouter } from 'next/router';

import AppLayout from '~/src/layouts/AppLayout';

function MyApp({ Component, pageProps }) {

    const router = useRouter();

    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
}

export default MyApp;