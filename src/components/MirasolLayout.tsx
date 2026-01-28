import ProjectLayout from './ProjectLayout'

const MirasolLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="The Mirasol"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore The Mirasol"
                ctaLink='/projects/mirasol'
                smallImg="/src/assets/mirasol1.png"
                largeImg="/src/assets/mirasol2.png"
            />
        </div>
    )
}

export default MirasolLayout