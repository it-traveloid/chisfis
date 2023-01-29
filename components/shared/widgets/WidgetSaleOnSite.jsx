import React from 'react';
import Link from 'next/link';

const WidgetSaleOnSite = () => {
    return (
        <aside className="widget widget_sell-on-site">
            <p>
                <i className="icon-store"></i> Продавать на Martfury?
                <Link href="/account/register">
                    <a> Зарегистрироваться !</a>
                </Link>
            </p>
        </aside>
    );
};

export default WidgetSaleOnSite;
