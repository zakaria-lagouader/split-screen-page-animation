import { Caption, Description, ReadMoreLink, SectionImage, SectionInfo, Title } from "../components";
import img from "../img/hair.webp";

const LeftSide = () => (
    <SectionInfo className="keen-slider__slide">
        <Caption><span>NEW YORK</span> <span>SINCE 2004</span></Caption>
        <Title>YOUR HAIR EXPERTS</Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime necessitatibus maiores impedit doloremque esse dolorum repellat
            reprehenderit veniam totam vel!
        </Description>
        <ReadMoreLink href="#">READ MORE</ReadMoreLink>
    </SectionInfo>
);

const RightSide = () => (
    <SectionImage
        className="keen-slider__slide"
        src={img}
    />
);

export default [LeftSide, RightSide];
