import Image from "next/image"
export default function About(){
    return (
        <div className="about h-[800px] w-full px-[64px] flex justify-between">
            <Image src='/about-fotos.png' width={640} height={588} alt="" className="my-[100px] " />
            <div className="texto-sobre w-[600px] mr-[40px] mt-[260px]">
                <div className="text-white font-poppins text-h1 font-bold">Sobre</div>
                <div className="text-white font-poppins text-left">Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis ultrices mauris at sed aliquet egestas. In tortor iaculis risus a egestas eget laoreet odio at. Porttitor tincidunt cursus et fringilla in.</div>
                <div className="text-white font-poppins text-left mt-[12px]">Lorem ipsum dolor sit amet consectetur. Pellentesque iaculis ultrices mauris at sed aliquet egestas. In tortor iaculis risus a egestas eget laoreet odio at. Porttitor tincidunt cursus et fringilla in.</div>
                <div className="text-white font-poppins font-bold text-left mt-[12px]">Horário de funcionamento: 09:00 as 18:00</div>
            </div>
        </div>
    )
}