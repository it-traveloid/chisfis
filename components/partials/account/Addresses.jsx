import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import Link from 'next/link';
import { getWithActive } from '@/components/utils/account/AccountLinks.js';

class Addresses extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const accountLinks = getWithActive('Адрес');

        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={accountLinks} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Платежный адрес
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        Вы пока не настроили этот тип адреса
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Редактировать</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Адрес доставки
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        Вы пока не настроили этот тип адреса
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Редактировать</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Addresses;
