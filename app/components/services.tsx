import CardServices from "./ui/cardServices";

type CardData = {
    url: string;
    service: string;
    price: string;
  }

  const cards: CardData[] = [
    {
      url: '/card-1.png',
      service: 'Corte de cabelo',
      price: 'R$ 54,90',
    },
    {
      url: '/card-2.png',
      service: 'Corte de barba',
      price: 'R$ 29,90',
    },
    {
      url: '/card-3.png',
      service: 'Cabelo e barba',
      price: 'R$ 74,90',
    },
  ];

export default function Services(){

    return (
        <div className="flex flex-col services h-[720px] w-full bg-white text-center items-center pt-[80px]">
            <div className="text-h1 text-primary-default font-poppins font-bold">SERVIÇOS</div>
            <div className="text-primary-default font-poppins mt-[8px] max-w-[800px]">Lorem ipsum dolor sit amet consectetur. At magna quam venenatis lacinia at amet ipsum. Erat mi mattis scelerisque vel. Dignissim interdum nisl erat arcu molestie sit dignissim neque.</div>
            <div className="cards mt-[52px] flex space-x-[24px]">
                {cards.map((card, index) => (
                    <CardServices
                    key={index}
                    url={card.url}
                    service={card.service}
                    price={card.price}
                    />
                ))}
            </div>
        </div>
    )
}