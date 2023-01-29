import React, { Component } from 'react';
import Slider from 'react-slick';

class VendorTestimonials extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = e => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = e => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <div className="ps-client-say">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Что говорят клиенты</h3>
                        <div className="ps-section__nav">
                            <a
                                className="ps-carousel__prev"
                                href="#"
                                onClick={this.handleCarouselPrev}>
                                <i className="icon-chevron-left"></i>
                            </a>
                            <a
                                className="ps-carousel__next"
                                href="#"
                                onClick={this.handleCarouselNext}>
                                <i className="icon-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            ref={slider => (this.slider = slider)}
                            {...carouselSetting}
                            className="ps-carousel outside">
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/1.jpg" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                    Олег Паращенко<span>eCommerce-директор KOLESATYT</span>
                                    </h4>
                                    <p>
                                    «Маркетплейсы — это будущее. Думаю именно туда всё уйдёт рано или поздно. 
                                    Большинство интернет-магазинов — ненужная штука. Что такое онлайн-торговля? 
                                    Через интернет выбрать себе нужный товар и получить его с доставкой на дом 
                                    либо забрать самому. В таких простых областях, где не требуется сложный 
                                    подбор товара, маркетплейс классно справляется»
                                    </p>
                                </div>
                            </div>
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/2.png" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                    Михаил Костылев<span>Владелец магазина 1minoxidil</span>
                                    </h4>
                                    <p>
                                    «Маркетплейсы затягивают, потому что ты сразу получаешь с них прибыль. 
                                    Но эти площадки тебе не принадлежат в отличие от собственного интернет-
                                    магазина. В любой момент маркетплейс могут закрыть, а продавца заблокировать.
                                    Чтобы такого не случилось, нужно соглашаться со всеми условиями, делать 
                                    скидки и проводить акции. У нас, например, постоянно случаются неприятные 
                                    ситуации с площадкой: то товар заблокируют, то не тот товар привезут клиенту, 
                                    то доставку задержат»
                                    </p>
                                </div>
                            </div>
                            <div className="ps-block--testimonial">
                                <div className="ps-block__header">
                                    <img src="/static/img/users/3.jpg" alt="martfury" />
                                </div>
                                <div className="ps-block__content">
                                    <i className="icon-quote-close"></i>
                                    <h4>
                                        Вася Пупкин<span>Неизвестный никому бизнесмен</span>
                                    </h4>
                                    <p>
                                        Делай что хочешь, твори что хочешь, лучше Паши программистов всё равно нет, 
                                        хоть ищи, хоть нет - лучше не найдёшь</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default VendorTestimonials;
