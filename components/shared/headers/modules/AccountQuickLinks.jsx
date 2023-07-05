import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../../../store/auth/action';
import { useSession, signIn, signOut } from "next-auth/react"

const AccountQuickLinks = (props) => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
    };
    const accountLinks = [
        {
            text: 'Информация об аккаунте',
            url: '/account/user-information',
        },
        {
            text: 'Уведомления',
            url: '/account/notifications',
        },
        {
            text: 'Заказы',
            url: '/account/invoices',
        },
        {
            text: 'Адрес',
            url: '/account/addresses',
        },
        {
            text: 'Недавно просмотренные',
            url: '/account/recent-viewed-product',
        },
        {
            text: 'Избранное',
            url: '/account/wishlist',
        },
    ];
    const { isLoggedIn } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));
  	const { data: session } = useSession()

    if (session) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a  onClick={() => signOut()}>
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                   
                        <a onClick={() => signIn()}>Войти</a>
                    <Link href="/account/register">
                        <a>Регистрация</a>
                    </Link>
                </div>
            </div>
        );
    }
};

export default connect((state) => state)(AccountQuickLinks);
