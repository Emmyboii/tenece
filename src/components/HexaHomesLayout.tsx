import ProjectLayout from './ProjectLayout'
import hexahomes1 from "../assets/hexahomes1.png";
import hexahomes2 from "../assets/hexahomes2.png";

const HexaHomesLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="HexaHomes"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore Hexa Homes"
                ctaLink='/projects/hexahomes'
                smallImg={hexahomes1}
                largeImg={hexahomes2}
                reverse
            />
        </div>
    )
}

export default HexaHomesLayout