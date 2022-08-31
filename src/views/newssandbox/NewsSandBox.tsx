import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import SideMenu from '../../components/newssandbox/SideMenu'
import TopHeader from '../../components/newssandbox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

import {Layout} from 'antd'
const {Content} = Layout

export default function NewsSandBox(){
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className='site-layout'>
                <TopHeader></TopHeader>
                <Content className='site-layout-background'>
                    <Switch>
                        <Route path='/home' component={Home}  />
                        <Route path='/user-manage/list' component={UserList} />
                        <Route path='/right-manage/role/list' component={RoleList} />
                        <Route path='/right-manage/right/list' component={RightList} />
                        <Redirect from='/' to='/home'  exact />
                        <Route path='*' component={NoPermission} />
                    </Switch>
                </Content>

            </Layout>

        </Layout>
    )
}