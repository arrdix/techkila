import { RootLayout } from './layout/root-layout'
import { Route, Routes } from 'react-router-dom'
import { Page } from './pages/page'

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Page />} />
            </Route>
        </Routes>
    )
}

export default App
