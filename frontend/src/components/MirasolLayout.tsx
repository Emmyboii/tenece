import ProjectLayout from './ProjectLayout'
import mirasol1 from "../assets/mirasol1.png";
import mirasol2 from "../assets/new3.jpg";

const MirasolLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="The Mirasol"
                subText="The Mirasol is crafted for those who demand more than just a place to live. Designed with precision, sophistication, and vision"
                cta="Explore The Mirasol"
                ctaLink='/projects/mirasol'
                smallImg={mirasol1}
                largeImg={mirasol2}
            />
        </div>
    )
}

export default MirasolLayout