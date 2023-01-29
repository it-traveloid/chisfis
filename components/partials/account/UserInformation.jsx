import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import FormChangeUserInformation from '~/components/shared/FormChangeUserInformation';
import { getWithActive } from '~/components/utils/account/AccountLinks.js';

const UserInformation = () => {
    const accountLinks = getWithActive('Редактировать профиль');

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
                            <FormChangeUserInformation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserInformation;
