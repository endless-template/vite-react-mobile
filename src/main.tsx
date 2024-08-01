import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/theme-config.less'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
