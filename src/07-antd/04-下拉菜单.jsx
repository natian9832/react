import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Button, theme, Dropdown, Space} from 'antd';
import "./css/index.css"
import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import {MenuProps} from "antd";

const {Header, Sider, Content} = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined/>,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];
const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined/>,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined/>,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Dropdown menu={{items}}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Hover me
                                <DownOutlined/>
                            </Space>
                        </a>
                    </Dropdown>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;