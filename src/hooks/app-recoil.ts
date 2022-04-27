import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const appState = atom({
  key: 'appState',
  default: 'Initial state'
})

// Get the values
export const useGetAppState = () => {
  return useRecoilValue(appState)
}

// Only set values
export const useSetAppState = () => {
  return useSetRecoilState(appState)
}

// Get and set values
export const useAppState = () => {
  const [state, setState] = useRecoilState(appState)
  return [state, setState] as const
}
