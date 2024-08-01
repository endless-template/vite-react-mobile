import { Link, useNavigate } from 'react-router-dom'
import { List } from 'antd-mobile'
import { NavBar } from '@/components'

function Home() {
  const go = useNavigate()
  return (
    <>
      <NavBar back={null}>首页</NavBar>
      <div className="py-4 my-4 bg-white rounded">
        <List header="🎉功能特性">
          <List.Item>👉Vite5.x + TypeScript 构建移动端基础脚手架</List.Item>
          <List.Item>👉React19 + React Compiler</List.Item>
          <List.Item>👉基于Antd-Mobile 自定义Design System</List.Item>
          <List.Item onClick={() => go('/ofetch')}>👉ofetch封装及接口管理</List.Item>
          <List.Item>👉Tailwindcss + rem适配</List.Item>
          <List.Item>👉Eslint + Prettier + CommitLint 规范</List.Item>
          <List.Item>👉集成svg图标组件</List.Item>
          <List.Item>👉兼容 Android 6.0+, iOS10.3+</List.Item>
        </List>
        <div className="pt-3 ml-3 text-base text-color/60">🎉enjoy ~</div>
      </div>
      <div className="py-5 text-center">
        <Link to="/design" className="block text-base text-primary font-500">
          自定义Design System
        </Link>
      </div>
    </>
  )
}

export default Home
