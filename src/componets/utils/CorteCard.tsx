interface CorteCardProps {
    title: string;
    imgUrl: string;
}

export function CorteCard({
    title,
    imgUrl,
}: CorteCardProps) {
    return (
        <div className="w-fit border border-[#999999] rounded-xl overflow-hidden mx-auto">
            <div className="w-40 h-52">
                <img
                    className="object-cover h-full w-fit"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                    alt=" no image avaliable"
                />
            </div>
            <p className="text-[#999999] text-sm my-2">
                {title}
            </p>
        </div>
    );
}
