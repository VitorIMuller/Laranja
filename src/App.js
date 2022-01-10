import {BrowserRouter, Route, Routes} from "react-router-dom"
import TelaInicio from './components/TelaInicio';
import TelaVideo from "./components/TelaVideo";
import "./style/reset.css"
import "./style/style.css"

function App(){
    return( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicio/>}/>
                <Route path="/video" element={<TelaVideo/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App