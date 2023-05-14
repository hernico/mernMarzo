import { Card, Space } from 'antd';
import React from 'react';
import RegisterForm from './formNormal';
import RegisterFormValidated from './registerFormValidated';

const Cards: React.FC = () => (
  <Space direction="horizontal" size={16}>
    <Card title="Normal Form" extra={<a href="#">New Form</a>} style={{ width: 500 }}>
      <RegisterForm/>
    </Card>
    <Card title="Validated Form" extra={<a href="#">New Form</a>} style={{ width: 500 }}>
      <RegisterFormValidated/>
    </Card>
  </Space>
);

export default Cards;