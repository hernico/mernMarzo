import { Card, Space } from 'antd';
import React from 'react';
import Colors from './Generator';
import ToDo from './ToDo';

const Cards: React.FC = () => (
  <Space direction="horizontal" size={16}>
    <Card title="Color Generator"  style={{ width: 500 }}>
      <Colors/>
    </Card>
    <Card title="Todo List"  style={{ width: 500 }}>
      <ToDo/>
    </Card>
  </Space>
);

export default Cards;