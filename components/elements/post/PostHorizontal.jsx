import React from 'react';
import Link from 'next/link';

const PostHorizontal = ({ data }) => {
    return (
        <article className="ps-post ps-post--horizontal">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${data.id}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                <img src={data.thumbnail} alt="martfury" />
                {data && data.badge ? (
                    <div className="ps-post__badge">
                        <i className={data.badge}></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__top">
                    <div className="ps-post__meta">
                        {data.categories.map(category => (
                            <Link
                                href="/shop"
                                key={category.id + category.text}>
                                <a>{category.text}</a>
                            </Link>
                        ))}
                    </div>
                    <Link href="/post/[pid]" as={`/post/${data.id}`}>
                        <a className="ps-post__title">{data.title}</a>
                    </Link>
                    <div className="ps-post__desc">
                        <p>
                            Lorem ipsum dolor sit amet, dolor siterim
                            consectetur adipiscing elit. Phasellus duio faucibus
                            est sed… * 
                            
                            * Мне жаль, мне жаль, мне жаль
                            усиленные процедуры контроля. Лодка в два фута
                            это но… (лат)
                        </p>
                    </div>
                </div>
                <p>
                    Декабрь 17, 2017 от
                    <Link href="/blog">
                        <a href="#"> drfurion</a>
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default PostHorizontal;
