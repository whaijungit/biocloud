import { userReducer } from './modules/user'
import { menuReducer } from './modules/menu'
import { IRootState } from '@/interface/store'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore<IRootState>({
    reducer: {
        user: userReducer,
        menu: menuReducer,
    }
})
