import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden
  `

export const Section = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
`

export const SectionImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url('${({src}) => src}') no-repeat center center/cover;
`

export const SectionInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Caption = styled.p`
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 300;
  margin-bottom: 1rem;

  span:first-child {
    margin-right: 1rem;
  }
  `
export const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  `

export const Description = styled.p`
  font-size: 0.8rem;
  color: #929292;
  line-height: 1.7;
  width: 60%;
  margin-bottom: 2rem;
`

export const ReadMoreLink = styled.a`
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  color: pink;
  border-bottom: 2px solid;
`

export const Pagination = styled.div<{ direction: "horizontal" | "vertical" }>`
    display: flex;
    ${({ direction = "horizontal" }) => 
        direction === "vertical" ? (
            "flex-direction: column;"
        ):  ""
    }
    align-items: center;
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 10;
    transform: translateY(-50%);

    & > div:not(:last-child) {
        ${({ direction = "horizontal" }) => 
        direction === "vertical" ? (
            "margin-bottom: 7px;"
        ):  "margin-right: 7px;"
    }
        
    }
`

export const Dot = styled.div<{ active?: boolean }>`
    width: 12px;
    height: 12px;
    background-color: ${({ active }) => active ? "black" : "#929292"};
    border-radius: 50%; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background-color: black;
    }
`