import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface UserInfo {
  name: string
  age?: number
  access?: string
}
interface AppState {
  userInfo: UserInfo
  updateUserInfo: (val: UserInfo) => void
  updateName: (val: string) => void
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      // 开启持久化
      set => ({
        userInfo: { name: '' },
        updateUserInfo: (data: UserInfo) => {
          set(() => ({ userInfo: data }))
        },
        updateName: (val: string) => {
          set(state => ({ userInfo: { ...state.userInfo, name: val } }))
        }
      }),
      {
        name: 'app',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
export default useAppStore
