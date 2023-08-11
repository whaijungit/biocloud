import { userInfo } from '@/api/user'
// import { flatteningPermissions } from '@/utils'
import { IUserReducer, IUserState } from '@/interface/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: IUserState = {
    menus: [],
    data: null,
    routes: [],
    actions: [],
    loading: false
}

const userSlice = createSlice<IUserState, IUserReducer, 'user'>({
    name: 'user',
    initialState,
    reducers: {
        setActions(state, action) {
            state.actions = action.payload
        },
        setUser(state, action) {
            state.data = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setRoutes(state, action) {
            state.routes = action.payload
        },
        setMenus(state, action) {
            state.menus = action.payload
        },
    }
})

export const userReducer = userSlice.reducer

export const userActions = userSlice.actions

export const fetchUserInfo = createAsyncThunk('user/whoAmI', async (_, { dispatch }) => {
    dispatch(userActions.setLoading(true))
    const info = await userInfo()
    if (info.code === 200) {
        // const routes = flatteningPermissions(info.data.auths.menus)
        dispatch(userActions.setUser(info.data))
        dispatch(userActions.setMenus(info.data.auths.menus))
        dispatch(userActions.setRoutes(info.data.auths.menus))
        dispatch(userActions.setActions(info.data.auths.actions))
    }
    dispatch(userActions.setLoading(false))
})
