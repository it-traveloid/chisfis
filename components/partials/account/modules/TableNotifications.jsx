import React from 'react';
import { Table } from 'antd';

const TableNotifications = ({ tableData, tableColumn }) => {
    return <Table columns={tableColumn} dataSource={tableData} />
}

export default TableNotifications;
