import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://c-ssl.dtstatic.com/uploads/item/201909/20/20190920064047_irjpf.thumb.1000_0.jpg',
      name:  t('mjset.sysname'),//'AI绘图',
      description: '点击<a href="https://api.expansion.chat/" class="text-blue-500" target="_blank" >密钥</a>获取令牌',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
