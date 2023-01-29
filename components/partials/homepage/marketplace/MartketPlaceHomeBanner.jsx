import React from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const MarketPlaceHomeBanner = () => {
    const carouselSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="ps-home-banner">
            <Slider {...carouselSettings} className="ps-carousel">
                <div
                    className="ps-banner--market-1"
                    style={{
                        backgroundImage: `url(/static/img/slider/home-3/home-banner/1.jpg)`,
                    }}>
                    <img
                        src="/static/img/slider/home-3/home-banner/1.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h5>Мега распродажа ноябрь 2022</h5>
                        <h3>Двойное комбо в <br /> Кузовнм цеху
                        </h3>
                        <p>
                            Скидки до <strong>50% </strong>
                        </p>
                        <a className="ps-btn" href="#">
                            В магазин
                        </a>
                    </div>
                </div>
                <div
                    className="ps-banner--market-1"
                    style={{
                        backgroundImage: `url(/static/img/slider/home-3/home-banner/2.jpg)`,
                    }}>
                    <img
                        src="/static/img/slider/home-3/home-banner/2.jpg"
                        alt="martfury"
                    />
                    <div className="ps-banner__content">
                        <h5>Мега распродажа декабрь 2022</h5>
                        <h3>
                            IKEA закрывается <br /> насовсем
                        </h3>
                        <p>
                            Скидка до <strong>50% </strong>
                        </p>
                        <a className="ps-btn" href="#">
                            В магазин
                        </a>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default MarketPlaceHomeBanner;
