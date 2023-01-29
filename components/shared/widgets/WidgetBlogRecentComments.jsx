import React from 'react';
import Link from 'next/link';

const WidgetBlogRecentComments = () => {
    return (
        <aside className="widget widget--blog widget--recent-comments">
            <h3 className="widget__title">Предыдущие комментарии</h3>
            <div className="widget__content">
                <p>
                    <Link href="/blog">
                        <a className="author">drfurion </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Dashboard</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Rayban Rounded коричневые очки</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan </a>
                    </Link>
                    on{' '}
                    <Link href="/blog">
                        <a> Sound Intone I65 Белые Наушники</a>
                    </Link>
                </p>
                <p>
                    <Link href="/blog">
                        <a className="author">logan</a>
                    </Link>
                    on
                    <Link href="/blog">
                        <a> Рубашка Caro Pane из смесовой льняной ткани с рукавами</a>
                    </Link>
                </p>
            </div>
        </aside>
    );
};

export default WidgetBlogRecentComments;
