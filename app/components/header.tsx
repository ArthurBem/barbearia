import ButtonAgendar from "./ui/buttonAgendar"
import Image from "next/image"

export default function Header() {
    return (
        <div className="header sticky top-0 flex justify-between h-[90px] w-full bg-primary-dark px-[32px] bg-opacity-95 backdrop-blur-md">
            <div className="nav-header flex text-white">
                <Image className="logo" src="logo-white.svg" alt="" width={51} height={60} />
                <div className="texto pt-[32px] flex pl-[70px] space-x-[32px] font-poppins text-h5">
                    <p>Sobre</p>
                    <p>Serviços</p>
                    <p>Contatos</p>
                </div>
            </div>
            <div className="button mt-[25px]"><ButtonAgendar /></div>
        </div>
    )
}