import Footer from '@/app/Components/Footer/Footer';
import Header from '@/app/Components/Header/Header';
import React from 'react';
import '../../../main.css';
import Algorithms from '@/app/Components/Algorithms/Algorithms';

export default function page() {
    return (
        <>
            <Header />
            <main className='Algorithms'>
                <div className='container'>
                    <Algorithms />
                </div>
            </main>
            <Footer />
        </>
    );
}
