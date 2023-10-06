
import first_landingImage from "../assets/Landing_Image.jpg"
import location_image from "../assets/location.jpg"
import social_media from "../assets/social_media.jpg"
import MainContent from "./MainContent"


const MainPage = () => {
    return (
        <div>
            <MainContent
                title="About Elizabeths Shop"
                subtitle="Our Vision"
                summary="Lorem ipsum text for Our Vision..."
                image={first_landingImage}
            />

            <MainContent
                title="Our Products"
                subtitle="Featured Items"
                summary="Lorem ipsum text for Featured Items..."
                image={location_image}
            />

            <MainContent
                title="Get in Touch"
                subtitle="Contact Us"
                summary="Lorem ipsum text for Contact Us..."
                image={social_media}
            />
        </div>
    );
}

export default MainPage
