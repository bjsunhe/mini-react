import React,{useState} from 'react'
import {Layout} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'
const {Header} = Layout
export default function TopHeader(){
    const [collapsed,setCollapsed]=useState(false)
    return (
        <Header className='site-layout-background'>
            {
                collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>
            }
        </Header>
    )
}