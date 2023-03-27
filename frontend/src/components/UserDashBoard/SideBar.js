import React from 'react'
import {
  HomeOutlined,
  SearchOutlined,
  TableOutlined,
  WechatOutlined,
  ControlOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './DashBoard.module.css'

const SideBar = () => {
  const navigate = useNavigate()
  const existingLink = '/user/dashboard'
  const onClick = (e) => {
    // append the key to the url
    navigate(`${existingLink}/${e.key}`)
  }
  return (
    <Menu
      onClick={onClick}
      mode='vertical'
      items={[
        {
          key: '',
          label: 'Home',
          icon: <HomeOutlined />,
        },
        {
          key: 'search',
          label: 'Search Jobs',
          icon: <SearchOutlined />,
        },
        {
          key: 'companies',
          label: 'Companies',
          icon: <TableOutlined />,
        },
        {
          key: 'compare',
          label: 'Compare Companies',
          icon: <ControlOutlined />,
        },

        {
          key: 'review',
          label: 'Give a Review',
          icon: <StarOutlined />,
        },
        {
          key: 'chat',
          label: 'Chat',
          icon: <WechatOutlined />,
        },
        {
          key: 'logout',
          label: 'Logout',
          icon: <TableOutlined />,
        },
      ]}
    />
  )
}

export default SideBar
