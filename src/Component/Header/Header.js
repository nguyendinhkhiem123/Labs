import React from 'react';
import { Layout , Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons'
import './Header.css';
import Logo from '../../Resource/img/Logo.jpeg'
const  { Header } =  Layout
function Headers(props) {
    return (
        <Header>
            <div className="header">
                   <div className="header__logo">
                        <img 
                            src={Logo} 
                            alt="Logo"
                            style={{width : '80px' , height:'64px'}}

                        />
                    </div> 
                    <div className="header__title">
                        <h1 className="text__title">Blogs</h1>
                    </div>
                    <div className="header__info">
                        <div className="header__box">
                            <Avatar size="small" icon={<UserOutlined />} />
                            <span style={{
                                paddingLeft : '8px'
                            }}>
                                Nguyễn đình khiêm
                            </span>
                        </div>
                    </div>
            </div>
        </Header>
    );
}

export default Headers;