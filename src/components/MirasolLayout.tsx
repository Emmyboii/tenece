import ProjectLayout from './ProjectLayout'
import mirasol1 from "../assets/mirasol1.png";
import mirasol2 from "../assets/mirasol2.png";

const MirasolLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="The Mirasol"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore The Mirasol"
                ctaLink='/projects/mirasol'
                smallImg={mirasol1}
                largeImg={mirasol2}
            />
        </div>
    )
}

export default MirasolLayout