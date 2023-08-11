import { store } from './store'
import 'nprogress/nprogress.css'
import { Router } from './router'
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/zh_CN'
import { Provider } from 'react-redux'
import { prefix, theme } from './config'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider
          theme={theme}
          locale={locale}
          prefixCls={prefix}
          componentSize='large'
        >
          <Router />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
