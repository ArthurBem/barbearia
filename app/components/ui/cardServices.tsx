import Image from "next/image"

interface cardProperties{
    url: string,
    service: string,
    price: string
}
export default function CardServices({url, service, price}: cardProperties ){
    return (
        <div className="cardServices w-[372px] h-[390px] shadow-cardShadow rounded-2xl">
            <Image src={url} alt="" width={355} height={320} className="mt-[16px] ml-[8px]"/>
            <div className="w-full mt-[14px] px-[8px] flex justify-between">
                <div className="text-primary-default font-poppins font-bold">{service}</div>
                <div className="bg-primary-default w-[82px] h-[28px] rounded-md flex items-center justify-center">
                    <div className="text-white text-center text-sm font-poppins">{price}</div>
                </div>
            </div>
        </div>
    )
}