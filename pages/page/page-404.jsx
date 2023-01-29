import React from 'react';
import Link from 'next/link';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const Page404 = () => {
    return (
        <PageContainer footer={<FooterDefault />} title="Page not found.">
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Ох! Страница не найдена</h3>
                            <p>
                            Кажется, что мы не можем найти то, что вы ищете.
                            Возможно поиск может помочь или вернуться к
                                <Link href="/">
                                    <a> домашней странице</a>
                                </Link>
                            </p>
                        </figure>
                        <form
                            className="ps-form--widget-search"
                            action="do_action"
                            method="get">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page404;
