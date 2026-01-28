import ProjectLayout from './ProjectLayout'

const HexaHomesLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="HexaHomes"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore Hexa Homes"
                ctaLink='/projects/hexahomes'
                smallImg="/src/assets/hexahomes1.png"
                largeImg="/src/assets/hexahomes2.png"
                reverse
            />
        </div>
    )
}

export default HexaHomesLayout