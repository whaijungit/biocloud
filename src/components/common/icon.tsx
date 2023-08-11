interface IProps {
    type: IconType
    onClick?: () => void
    styles?: React.CSSProperties
}

const Icon: React.FC<IProps> = (props) => {
    return (
        <i onClick={props.onClick} style={props.styles} className={`iconfont ${props.type}`}>
        </i>
    )
}

enum IconType {
    pwd = 'icon-mima',
    json = 'icon-json',
    eye = 'icon-chakan',
    gps = 'icon-dizhi',
    zhihu = 'icon-zhihu',
    weibo = 'icon-weibo',
    file = 'icon-wenjian',
    editor = 'icon-bianji',
    weixin = 'icon-weixin',
    email = 'icon-youxiang',
    mobile = 'icon-dianhua',
    remove = 'icon-shanchu',
    user = 'icon-yonghuming',
    foloder = 'icon-wenjianjia',
    captcha = 'icon-yanzhengma',
    msg = 'icon-a-Property1xiaoxi',
    tool = 'icon-a-Property1gongju',
    upload = 'icon-shangchuanshuju',
    roles = 'icon-a-Property1jiaose',
    task = 'icon-a-Property1wodefenxi',
    data = 'icon-a-Property1wodeshuju',
    message = 'icon-a-Property1xiaoxi',
    product = 'icon-a-Property1yunying',
    dashbord = 'icon-a-Property1zonglan',
    permission = 'icon-a-Property1quanxian',
    account = 'icon-a-Property1zhanghuxinxi',

}

export {
    Icon,
    IconType
}
