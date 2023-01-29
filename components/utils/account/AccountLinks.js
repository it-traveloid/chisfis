export const accountLinks = [
    {
        text: 'Информация об аккаунте',
        url: '/account/my-account',
        icon: 'icon-user',
    },
    {
        text: 'Редактировать профиль',
        url: '/account/user-information',
        icon: 'icon-pencil',
    },
    {
        text: 'Уведомления',
        url: '/account/notifications',
        icon: 'icon-alarm-ringing',
    },
    {
        text: 'Счета',
        url: '/account/invoices',
        icon: 'icon-papers',
    },
    {
        text: 'Адрес',
        url: '/account/addresses',
        icon: 'icon-map-marker',
    },
    {
        text: 'Недавно просмотренные товары',
        url: '/account/recent-viewed-product',
        icon: 'icon-store',
    },
    {
        text: 'Список желаемого',
        url: '/account/wishlist',
        icon: 'icon-heart',
    },
    {
        text: 'Последние заказы',
        url: '/account/orders',
        icon: 'icon-history',
    },
    {
        text: 'Возвраты',
        url: '/account/returns',
        icon: 'icon-arrow-return',
    },
];

export const loginPathPage = '/account/login';

const setActive = function (active, links) {
    if (Array.isArray(active)) {
        active.forEach(link => {
            for (let i = 0; i < links.length; i++) {
                if (link !== links[i]?.text) {
                    links[i].active = false;
                    continue;
                }

                links[i].active = true;
            }
        })
    } else {
        for (let i = 0; i < links.length; i++) {
            if (active !== links[i]?.text) {
                links[i].active = false;
                continue;
            }

            links[i].active = true;
        }
    }

    return links;
}

export const getWithActive = function (active, links = accountLinks) {
    if (!active?.length || !links?.length) return [];

    return setActive(active, links);
}