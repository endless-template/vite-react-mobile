import { Link, useNavigate } from 'react-router'
import { List } from 'antd-mobile'
import { NavBar } from '@/components'

function Home() {
  const go = useNavigate()
  return (
    <>
      <NavBar back={null}>首页</NavBar>
      <div className="my-4 rounded bg-white py-4">
        <List header="🎉功能特性">
          <List.Item>👉Vite7.x + TypeScript 构建移动端基础脚手架</List.Item>
          <List.Item>👉React19 + React Compiler</List.Item>
          <List.Item>👉基于Antd-Mobile 自定义Design System</List.Item>
          <List.Item onClick={() => go('/ofetch')}>👉ofetch封装及接口管理</List.Item>
          <List.Item>👉Tailwindcss + rem适配</List.Item>
          <List.Item>👉Eslint + Prettier + CommitLint 规范</List.Item>
          <List.Item>👉集成svg图标组件</List.Item>
          <List.Item>👉兼容 Android 7.0+, iOS11+</List.Item>
        </List>
        <div className="ml-3 pt-3 text-base text-color/60">🎉enjoy ~</div>
      </div>
      <div className="py-5 text-center">
        <Link to="/design" className="block text-base font-500 text-primary">
          自定义Design System
        </Link>
      </div>
    </>
  )
}

export default Home
