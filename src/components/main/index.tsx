import Image from "next/image"
import Logo from "../../../public/logo.png";
import Arrow from "../../../public/arrow.png";


export default function Main() {
    return (
        <div className="min-h-screen md:mx-16 mx-4 relative flex flex-col justify-center items-center md:gap-16 sm:gap-8 gap-4">
            <Image src={Logo} className="fade-down-animation" alt="Geniusula Logo, Geniusula Discord, Geniusula Site, Geniusula Website" />

            <h1 className="font-bold text-5xl fade-up-animation">
                Geniusula
            </h1>

            <p className="font-medium mx-4 text-center text-2xl fade-up-animation">
                “Üç tarafı aptallarla çevrili deha parçası”
            </p>

            <Image src={Arrow} className="animate-bounce absolute bottom-4" alt="Geniusula Logo, Geniusula Discord, Geniusula Site, Geniusula Website" />
        </div>
    )
}