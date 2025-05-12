export function TablePrice() {
    const services = [
        { name: "Corte Simples", price: "R$99,99" },
        { name: "Corte + Barba", price: "R$120,00" },
        { name: "Corte Degradê", price: "R$110,00" },
        { name: "Corte Infantil", price: "R$80,00" },
        { name: "Corte Premium", price: "R$150,00" },
        { name: "Corte + Hidratação", price: "R$130,00" },
        { name: "Barba Completa", price: "R$60,00" },
        { name: "Corte + Sobrancelha", price: "R$115,00" },
        { name: "Corte Longo", price: "R$105,00" },
        { name: "Corte + Pigmentação", price: "R$140,00" },
    ];

    return (
        <div className="px-6 mb-6">
            <div className="w-full border border-[#999999] rounded-xl space-y-4 p-6 container mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2"
                    >
                        <h1 className="font-semibold">
                            {service.name}
                        </h1>
                        <div className="flex-1 h-[1px] bg-[#999999]"></div>
                        <h1 className="text-amber-400 font-semibold">
                            {service.price}
                        </h1>
                    </div>
                ))}
                <div className="flex items-center gap-2">
                    <h1 className="font-bold">
                        *Observação ou detalhe importante
                    </h1>
                </div>
            </div>
        </div>
    );
}
