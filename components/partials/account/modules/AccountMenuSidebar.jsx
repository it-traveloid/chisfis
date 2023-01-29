import React from 'react';
import Link from 'next/link';

const AccountMenuSidebar = ({ data, session }) => {
    const dataUser = {
        image: '/static/img/users/3.jpg',
        email: session?.user.email.email
	}
	
    return (
        <aside className="ps-widget--account-dashboard">
		<div className="ps-widget__header">
		<img src={dataUser?.image} />
		<figure>
		<figcaption>Добро пожаловать</figcaption>
		<p>{dataUser?.email}</p>
		</figure>
		</div>
		<div className="ps-widget__content">
		<ul>
		{data.map(link => (
			<li key={link.text} className={link.active ? 'active' : ''}>
			<Link href={link.url}>
			<a>
			<i className={link.icon}></i>
			{link.text}
			</a>
			</Link>
			</li>
		))}
		<li>
		<Link href="/account/my-account">
		<a>Выход</a>
		</Link>
		</li>
		</ul>
		</div>
        </aside>
	)
};

export default AccountMenuSidebar;
