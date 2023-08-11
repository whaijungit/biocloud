import { createSlice } from '@reduxjs/toolkit'
import { IMenuReducer, IMenuState } from '@/interface/menu'

const menuSlice = createSlice<IMenuState, IMenuReducer>({
    name: 'menu',
    initialState: {
        selectedKeys: []
    },
    reducers: {
        setSelectedKeys(state, action) {
            state.selectedKeys = action.payload
        },
    }
})

export const menuReducer = menuSlice.reducer

export const menuActions = menuSlice.actions
