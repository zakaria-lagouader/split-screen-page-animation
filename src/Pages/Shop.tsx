import { Caption, Description, ReadMoreLink, SectionImage, SectionInfo, Title } from "../components";

const LeftSide = () => (
    <SectionImage
        className="keen-slider__slide"
        src="images/shop.webp"
    />
);

const RightSide = () => (
    <SectionInfo className="keen-slider__slide">
        <Caption><span>NEW YORK</span> <span>SINCE 2004</span></Caption>
        <Title>SHOP NOW</Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime necessitatibus maiores impedit doloremque esse dolorum repellat
            reprehenderit veniam totam vel!
        </Description>
        <ReadMoreLink href="#">READ MORE</ReadMoreLink>
    </SectionInfo>
);

export default [LeftSide, RightSide];
