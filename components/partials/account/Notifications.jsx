import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import { getWithActive } from '@/components/utils/account/AccountLinks.js';
import { Table, Divider, Tag } from 'antd';

const Notifications = () => {
    const accountLinks = getWithActive('Уведомления');

    const tableData = [
        {
            key: '1',
            title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
            dateCreate: '20-1-2020',
            tags: ['sale'],
        },
        {
            key: '2',
            title:
                'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
            dateCreate: '21-1-2020',
            tags: ['new'],
        },
        {
            key: '3',
            title: ' Et harum quidem rerum',
            dateCreate: '21-1-2020',
            tags: ['new'],
        },
        {
            key: '4',
            title:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
            dateCreate: '21-1-2020',
            tags: ['sale'],
        },
    ];
    const tableColumn = [
        {
            title: 'Date Create',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
            render: text => <a>{text}</a>,
            width: '100px',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'sale') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            width: '200px',
            render: (text, record) => (
                <span>
                    <a>Mark as read {record.name}</a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                </span>
            ),
        },
    ];

    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={accountLinks} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-page__content">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__header">
                                    <h3>Уведомления</h3>
                                </div>
                                <div className="ps-section__content">
                                    <TableNotifications tableData={tableData} tableColumn={tableColumn} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Notifications;
