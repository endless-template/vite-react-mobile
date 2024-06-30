import { useState } from 'react'
import { Button, Checkbox, Dialog, List, Popup, Radio, Switch, Toast } from 'antd-mobile'
import { NavBar } from '@/components'
import useDark from '@/hooks/useDark'
export default function Design() {
  const { theme, setTheme } = useDark()
  const [popupVisible, setPopupVisible] = useState(false)
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
          <List.Item onClick={() => setPopupVisible(true)}>Popup弹出层</List.Item>
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
      <Popup
        visible={popupVisible}
        onMaskClick={() => {
          setPopupVisible(false)
        }}
        onClose={() => {
          setPopupVisible(false)
        }}
        bodyStyle={{ height: '40vh' }}
      >
        <div>asd</div>
      </Popup>
    </>
  )
}
