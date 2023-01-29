import React from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { getWithActive } from '~/components/utils/account/AccountLinks.js';
import { useEffect } from 'react';
import { useSession } from "next-auth/react"
// import { useCheckSession } from '~/hooks/useCheckSession';
import {useRouter} from 'next/router';

const MyAccount = () => {
	const accountLinks = getWithActive('Информация об аккаунте');
	// const { checkProfilePage } = useCheckSession();
    const router=useRouter()
	const { data: session } = useSession();
	
	useEffect(() => {
		// checkProfilePage(session)
		if (!session) router.push('/account/login')
	}, [session]);
	// console.log(session)
	
	if(session)
	return (
		<section className="ps-my-account ps-page--account">
		<div className="container">
		<div className="row">
		<div className="col-lg-4">
		<div className="ps-page__left">
		<AccountMenuSidebar data={accountLinks} session={session} />
		</div>
		</div>
		<div className="col-lg-8">
		<div className="ps-page__content">
		<div className="ps-page__dashboard">
		<p>
		Здравствуйте <strong>{session.user.name} </strong>!
		</p>
		<p>
		В личном кабинете вы можете просмотреть
		ваши{' '}
		<Link href="/account/orders">
		<a>Последние Заказы</a>
		</Link>
		, управлять своими{' '}
		<Link href="/account/user-information">
		<a>
		адреса доставки и платежным адресом
		</a>
		</Link>
		, и{' '}
		<Link href="/account/user-information">
		<a>
		менять свой пароль и детали аккаунта
		</a>
		</Link>
		.
		</p>
		</div>
		</div>
		</div>
		</div>
		</div>
		</section>
	);
	
	return (
		<>
		Загрузка....
		</>
	)
}

export default MyAccount;
