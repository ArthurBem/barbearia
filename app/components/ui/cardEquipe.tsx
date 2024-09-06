import Image from "next/image"
import { FacebookIcon } from "./icons/facebookIcon"
import { XIcon } from "./icons/xIcon"
import { InstagramIcon } from "./icons/instagram"

interface cardProperties {
    url: string,
    nome: string,
}
export default function CardEquipe({ url, nome }: cardProperties) {
    return (
        <div className="cardServices w-[318px] h-[378px]">
            <Image src={url} alt="" width={318} height={280} className="" />
            <div className="w-full mt-[8px] px-[8px] flex justify-between">
                <div className="text-secondary font-poppins font-bold">{nome}</div>
                <div className="flex flex-row space-x-2">
                    <div><InstagramIcon /></div>
                    <div><FacebookIcon /></div>
                    <div><XIcon /></div>
                </div>
            </div>
        </div>
    )
}