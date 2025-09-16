// router dom ajuda a navegar entre as rotas
import { Route, Routes } from "react-router-dom"

// Paginas
import Home from "../containers/Home/index.jsx"
import Movies from "../containers/Movies/index.jsx"
import Series from "../containers/Series/index.jsx"
import DefaultLayout from "../layout/DefaultLayout.jsx"

function Rota() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
            </Route>
        </Routes>
    )
}

export default Rota