import { useState } from 'react'
import { Button, Checkbox, Dialog, List, Radio, Switch, Toast } from 'antd-mobile'
import { Drawer } from 'vaul'
import { NavBar, SubmitBar, SvgIcon } from '@/components'
import useDark from '@/hooks/useDark'
export default function Design() {
  const { theme, setTheme } = useDark()
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavBar>Design System</NavBar>
      <div className="">
        <List
          header="基础功能"
          className="custom-list"
          style={{ '--font-size': '1rem', '--padding-left': '20px', '--padding-right': '20px' }}
        >
          <List.Item
            extra={<Switch style={{ '--height': '28px' }} checked={theme} onChange={e => setTheme(e)} />}
          >
            暗黑模式
          </List.Item>
          <List.Item onClick={() => setOpen(true)}>Drawer By vaul</List.Item>
          <List.Item
            onClick={() => {
              Dialog.alert({
                content: '欢迎使用模板框架'
              })
            }}
          >
            Dialog alert
          </List.Item>
          <List.Item
            onClick={() => {
              Dialog.confirm({
                title: '信息提示',
                content: '是否确认提交'
              })
            }}
          >
            Dialog confirm
          </List.Item>
        </List>
        <div>
          <Button
            color="primary"
            onClick={() => {
              Toast.show({
                icon: 'success',
                content: '上传成功'
              })
            }}
          >
            成功
          </Button>
          <Button
            color="danger"
            onClick={() => {
              Toast.show({
                icon: 'fail',
                content: '上传失败'
              })
            }}
          >
            失败
          </Button>
          <Button
            color="warning"
            onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '上传中...',
                duration: 4000,
                maskClickable: false
              })
              setTimeout(() => {
                Toast.show({
                  icon: 'success',
                  content: '上传成功'
                })
              }, 3000)
            }}
          >
            loading
          </Button>
        </div>
        <div className="bg-white p-5 my-2">
          <Checkbox checked disabled />
          <Checkbox disabled />
          <Checkbox indeterminate />
          <Checkbox />
          <Radio.Group defaultValue={1}>
            <Radio value={1} />
            <Radio value={2} />
          </Radio.Group>
          <Radio disabled checked />
          <Radio disabled />
        </div>
      </div>
      <SvgIcon type="calendar" className="size-8" fill="red" />
      <SvgIcon type="back" className="size-8" fill="var(--adm-color-text)" />
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Overlay className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 z-10" />
        <Drawer.Portal>
          <Drawer.Content className="flex z-20 flex-col rounded-t-[8px] h-full mt-10 max-h-[56%] fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-lg flex-1">
              <div className="flex-shrink-0 w-12 h-1 mx-auto mb-6 rounded-full bg-gray-300" />
              <div className=" mx-auto text-color/60">
                <Drawer.Title className="mb-4 text-lg font-700 text-color/100">This is title</Drawer.Title>
                <p className="mb-2">
                  This component can be used as a Dialog replacement on mobile and tablet devices.
                </p>
                <p className="mb-2">
                  It comes unstyled, has gesture-driven animations, and is made by Emil Kowalski .
                </p>
                <p className="mb-8">
                  It uses Radix s Dialog primitive under the hood and is inspired by this tweet.
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <SubmitBar height="50px" className="px-5 py-3">
        <Button block size="large" color="primary">
          提交
        </Button>
      </SubmitBar>
    </>
  )
}
