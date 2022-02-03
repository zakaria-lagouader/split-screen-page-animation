import styled from "styled-components";
import { Caption, Description, SectionImage, SectionInfo, Title } from "../components";

const BlackSectionInfo = styled(SectionInfo)`
    background-color: black;
    color: white;
    text-align: left;
`

const Grid = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-gap: 1rem;
`

const Loaction = styled.div`
    h4 {
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
    }
    p {
        font-weight: 300;
        font-size: 0.7rem;
        line-height: 1.5;
    }
`

const RightSide = () => (
    <BlackSectionInfo className="keen-slider__slide">
        <Caption><span>NEW YORK</span> <span>SINCE 2004</span></Caption>
        <Title>NEW LOACTION</Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime necessitatibus maiores
        </Description>
        <Grid>
            <Loaction>
                <h4>NEW YORK</h4>
                <p>
                Lorem ipsum dolor sit amet 
                (consectetur) adipisicing elit.
                Maxime necessitatibus maiores
                </p>
            </Loaction>
            <Loaction>
                <h4>BROOKLYN</h4>
                <p>
                Lorem ipsum dolor sit amet 
                (consectetur) adipisicing elit.
                Maxime necessitatibus maiores
                </p>
            </Loaction>
            <Loaction>
                <h4>SOHO</h4>
                <p>
                Lorem ipsum dolor sit amet 
                (consectetur) adipisicing elit.
                Maxime necessitatibus maiores
                </p>
            </Loaction>
            <Loaction>
                <h4>Park ave</h4>
                <p>
                Lorem ipsum dolor sit amet 
                (consectetur) adipisicing elit.
                Maxime necessitatibus maiores
                </p>
            </Loaction>
        </Grid>
    </BlackSectionInfo>
);

const LeftSide = () => (
    <SectionImage
        className="keen-slider__slide"
        src="images/city.webp"
    />
);

export default [LeftSide, RightSide];
