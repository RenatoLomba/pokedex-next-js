import React from 'react';
import Link from 'next/link';

const Sobre = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    Sobre
                </Link>
            </li>
        </ul>
    )
}
export default Sobre;
