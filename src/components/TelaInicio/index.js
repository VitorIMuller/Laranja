import { Link } from "react-router-dom"
import styled from "styled-components"



function TelaInicio(){
    return(
        <Container>

            <Titulo>Atenção</Titulo>
            <Frase>O conteúdo a seguir terá um forte impacto em suas vidas, recebemos fortes informações e não conseguimos guardar!!!</Frase>
            <Frase2>Deseja saber o que temos para lhe dizer?????</Frase2>
            <Botao to="/video"> Sim</Botao>
        </Container>
        
    )
}
export default TelaInicio


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Titulo = styled.div`
    font-weight: bold;
    font-size: 80px;
    color: orangered;
`
const Frase = styled.div`
    width: 300px;
    font-size: 40px;
    text-align: center;
    font-weight: bold;

    margin-top: 30px;
    color: orangered;
    font-style: italic;
`
const Frase2 = styled.div`
    width: 300px;
    font-size: 40px;
    text-align: center;
    font-weight: bold;

    margin-top: 30px;
    color: yellow;
    font-style: inherit;
`
const Botao = styled(Link)`
        width: 200px;
        height: 81px;

        background-color: green;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;

        font-size: 40px;
        color: white;
        font-weight: bold;

        border-radius: 50px;

        margin-top: 30px;
`
