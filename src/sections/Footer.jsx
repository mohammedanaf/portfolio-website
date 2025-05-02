import { socialImgs } from "../constants"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/public/resume.pdf" download>Download Resume</a>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a href={img.url} key={img.url} target="_blank" className="icon">
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &copy; {new Date().getFullYear()} Mohammed Anaf. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer