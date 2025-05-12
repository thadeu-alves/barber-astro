export function Footer() {
    return (
        <footer className="bg-black">
            <div className="container text-center bg-black space-y-4 py-8 text-white mx-auto">
                <p>
                    © 2024 [Seu Nome]. Todos os direitos
                    reservados.
                </p>

                <p className="text-neutral-500">
                    Desenvolvido por{" "}
                    <a
                        href="https://thadeualves.vercel.app"
                        className="text-amber-400"
                    >
                        Thadeu Alves
                    </a>
                </p>
            </div>
        </footer>
    );
}
