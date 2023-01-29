import React from 'react';
import Link from 'next/link';

import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <HeaderDefault />
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Ох! Страница не найдена</h3>
                            <p>
                                Это означает, что мы не нашли.{' '}
                                <br />
                                Возвращайтесь
                                <Link href="/">
                                    <a> Главная</a>
                                </Link>
                            </p>
                        </figure>
                    </div>
                </div>
            </div>
            <FooterDefault />
        </div>
    );
}

export default Error;
