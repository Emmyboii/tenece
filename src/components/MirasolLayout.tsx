import ProjectLayout from './ProjectLayout'

const MirasolLayout = () => {
    return (
        <div>
            <ProjectLayout
                text="The Mirasol"
                subText="Crafted for High Performers. Built for Legacy."
                cta="Explore The Mirasol"
                ctaLink='/projects/mirasol'
                smallImg="/src/assets/mirasol1.svg"
                largeImg="/src/assets/mirasol2.svg"
            />
        </div>
    )
}

export default MirasolLayout