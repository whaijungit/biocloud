import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { menuActions } from '@/store/modules/menu'

const useSelectdKeys = (seletedKeys: string[]) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(menuActions.setSelectedKeys(seletedKeys))
    }, [seletedKeys])
}

export default useSelectdKeys;
