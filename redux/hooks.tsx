'use client';
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useMusicDispatch = useDispatch.withTypes<AppDispatch>()
export const useMusicSelector = useSelector.withTypes<RootState>()
export const useMusicStore = useStore.withTypes<AppStore>()