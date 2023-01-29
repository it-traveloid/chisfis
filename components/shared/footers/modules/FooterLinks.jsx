import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Кондиционеры',
            url: '/shop',
        },
        {
            text: 'Аудио и Театры',
            url: '/shop',
        },
        {
            text: 'Авто звук',
            url: '/shop',
        },
        {
            text: 'Офисная Электроника',
            url: '/shop',
        },
        {
            text: 'LED телевизоры',
            url: '/shop',
        },
        {
            text: 'Стиральные Машины',
            url: '/shop',
        },
    ],
    clothingAndApparel: [
        {
            text: 'Принтеры',
            url: '/shop',
        },
        {
            text: 'Проекторы',
            url: '/shop',
        },
        {
            text: 'Сканеры',
            url: '/shop',
        },
        {
            text: 'Магазин и Бизнес',
            url: '/shop',
        },
        {
            text: '4K Ультра HD ТВ',
            url: '/shop',
        },
        {
            text: 'LED Телевизоры',
            url: '/shop',
        },
        {
            text: 'OLED Телевизоры',
            url: '/shop',
        },
    ],
    gardenAndKitchen: [
        {
            text: 'Посуда',
            url: '/shop',
        },
        {
            text: 'Украшения',
            url: '/shop',
        },
        {
            text: 'Фурнитура',
            url: '/shop',
        },
        {
            text: 'Садовые Инструменты',
            url: '/shop',
        },
        {
            text: 'Садовое Оборудование',
            url: '/shop',
        },
        {
            text: 'Электро и Ручные Инструменты',
            url: '/shop',
        },
        {
            text: 'Посуда и Гаджет',
            url: '/shop',
        },
    ],
    healthAndBeauty: [
        {
            text: 'Уход за Волосами',
            url: '/shop',
        },
        {
            text: 'Украшения',
            url: '/shop',
        },
        {
            text: 'Мэйкап',
            url: '/shop',
        },
        {
            text: 'Всё для Душа',
            url: '/shop',
        },
        {
            text: 'Уход за Кожей',
            url: '/shop',
        },
        {
            text: 'Калоген',
            url: '/shop',
        },
        {
            text: 'Парфюм',
            url: '/shop',
        },
    ],
    jewelryAndWatch: [
        {
            text: 'Ожерелья',
            url: '/shop',
        },
        {
            text: 'Кулоны',
            url: '/shop',
        },
        {
            text: 'Кольца с Бриллиантом',
            url: '/shop',
        },
        {
            text: 'Серебряные Серьги',
            url: '/shop',
        },
        {
            text: 'Очиститель Кожи',
            url: '/shop',
        },
        {
            text: 'Гучи',
            url: '/shop',
        },
    ],
    computerAndTechnology: [
        {
            text: 'Десктопы',
            url: '/shop',
        },
        {
            text: 'Ноутбуки',
            url: '/shop',
        },
        {
            text: 'Смартфоны',
            url: '/shop',
        },
        {
            text: 'Планшеты',
            url: '/shop',
        },
        {
            text: 'Игровые Контроллеры',
            url: '/shop',
        },
        {
            text: 'Аудио и Видео',
            url: '/shop',
        },
        {
            text: 'Беспроводные колонки',
            url: '/shop',
        },
    ],
};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Бытовая Техника:</strong>
            {Links.consumerElectric.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Одежда и  Наряды:</strong>
            {Links.clothingAndApparel.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Дом, Сад и  Кухня:</strong>
            {Links.gardenAndKitchen.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Красота и Здоровье:</strong>
            {Links.healthAndBeauty.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Ювелирные украшения и  Часы:</strong>
            {Links.jewelryAndWatch.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Компьютеры и  Технологии:</strong>
            {Links.computerAndTechnology.map((item) => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
    </div>
);

export default FooterLinks;
