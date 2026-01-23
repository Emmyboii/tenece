import HexaHomesPages from "../components/HexaHomesPages"
import MirasolPage from "../components/MirasolPage"

const ProjectTypes = () => {

    const location = window.location.pathname

    return (
        <div>
            {location.includes('/mirasol') ? (
                <MirasolPage />
            ) : location.includes('/hexahomes') ? (
                <HexaHomesPages />
            ) : null}
        </div>
    )
}

export default ProjectTypes