import styled from "styled-components"
import video from "../Video/take.mp4"
import "./style.css"

function TelaVideo(){
    return(
        <Container>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Qn4vWZr3zC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
            <Texto> Após assistir o video, responda o formulário pufavô!</Texto>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVAwAkn80aDBcEZoujbv75Te-l6wyiXi3meqGmepJwpzA9eA/viewform?usp=sf_link">ACESSE AQUI!</a>
        </Container>
    )
}
export default TelaVideo

const Container = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: orangered;

`
const Texto = styled.div`
    
    width: 300px;
    font-size: 40px;
    text-align: center;
    font-weight: bold;

    margin-top: 30px;
    color: black;
    font-style: inherit;
    text-decoration: underline;

    margin-bottom: 30px;
`


