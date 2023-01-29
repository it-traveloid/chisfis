import React, { Component } from 'react';
import FormEditAddress from './modules/FormEditAddress';
import { getWithActive } from '~/components/utils/account/AccountLinks.js';
import AccountMenuSidebar from './modules/AccountMenuSidebar';

class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    editData(values) {
        console.log(values)
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
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>Платежный адрес</h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <FormEditAddress onFinish={this.editData} />
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

export default EditAddress;
