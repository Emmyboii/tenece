import ProjectLayout from './ProjectLayout'

const HexaHomesLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="HexaHomes"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore Hexa Homes"
                ctaLink='/projects/hexahomes'
                smallImg="/src/assets/hexahomes1.svg"
                largeImg="/src/assets/hexahomes2.svg"
                reverse
            />
        </div>
    )
}

export default HexaHomesLayout