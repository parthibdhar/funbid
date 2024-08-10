
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // for data add/push
export const useAppSelector = useSelector.withTypes<RootState>()   // for data get
export const useAppStore = useStore.withTypes<AppStore>()