import { Link } from "@/config"
import { IFlatteningItem } from "@/interface/option"
import { IPermission } from "@/interface/permission"

export const flatteningPermissions = (permission: IPermission[]): IFlatteningItem[] => {
    const flattenings: IFlatteningItem[] = []
    const _flattening = (permission: IPermission[]) => {
        for (const permiss of permission) {
            if (permiss.children) {
                for (const item of permiss.children) {
                    let ss =  item.sign.split('/')
              
                    flattenings.push({
                        name: item.name,
                        path: '/' + Link.sys + '/' + ss[2].replace('system',''),
                    })
                }
            }
        }
    }
    _flattening(permission)
    return flattenings
}