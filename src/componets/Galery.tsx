import { CorteCard } from "./utils/CorteCard";

export function Galery() {
    const allCortes = [
        {
            title: "Corte Simples",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte + Barba",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte Degradê",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte Infantil",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte Premium",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte + Hidratação",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Barba Completa",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte + Sobrancelha",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte Longo",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
        {
            title: "Corte + Pigmentação",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
        },
    ];

    return (
        <div className="grid grid-cols-2 items-cente gap-y-4 container mx-auto md:grid-cols-3 lg:grid-cols-4">
            {allCortes.map((corte) => {
                return (
                    <CorteCard
                        key={corte.title}
                        title={corte.title}
                        imgUrl={corte.imgUrl}
                    />
                );
            })}
        </div>
    );
}
