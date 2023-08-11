import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export interface IMenuState {
    selectedKeys: string[]
}

export interface IMenuReducer extends SliceCaseReducers<IMenuState> {
    setSelectedKeys: (state: IMenuState, action: PayloadAction<string[]>) => void
}