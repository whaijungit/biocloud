import { IMenuState } from './menu'
import { IUserState } from './user'

export interface IRootState {
    user: IUserState
    menu: IMenuState
}
