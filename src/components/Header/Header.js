import React from 'react'

import Helmet from 'react-helmet'

import { Menu } from 'antd'
import styled from  'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.65);
`;


class Header extends React.Component {
  onSelect({item, key, selectedKeys}) {
    this.props.push(key)
  }
  render() {
    const { pathname } = this.props
    return (
      <HeaderWrapper>
        <Title>Test</Title>
        <Helmet title={ pathname } />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          selectedKeys={[ pathname ]}
          onSelect={this.onSelect.bind(this)}
        >
          <Menu.Item key="/">
            Home
          </Menu.Item>
          <Menu.Item key="/about">
            About
          </Menu.Item>
        </Menu>
      </HeaderWrapper>
    )
  }
}

export default Header