import ButtonAgendar from "./ui/buttonAgendar";

export default function CallToAction(){
    return (
        <div className="CTA flex flex-col bg-hero-pattern bg-no-repeat bg-center h-[820px] w-full align-middle items-center justify-center">
        <div className="max-w-[866px] font-poppins text-[44px] font-bold text-white text-center [text-shadow:_3px_3px_8px_rgb(0_0_0_/_55%)]">ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</div>
        <div className="text-white font-poppins text-h5 mt-[24px]">Horário de Funcionamento: 09:00 às 18:00</div>
        <div className="button mt-[36px]">
          <ButtonAgendar />
        </div>
      </div>
    )
}