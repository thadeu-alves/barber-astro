export function Main() {
    return (
        <div className="bg-black">
            <main className="bg-black text-white px-6 py-9 space-y-9 container mx-auto">
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <div>
                            <h2 className="font-light">
                                Olá, eu sou
                            </h2>
                            <h1 className="font-bold text-lg">
                                [Seu Nome]
                            </h1>
                        </div>
                        <p className="text-md font-light  text-sm">
                            Barbearia e Salão de Beleza
                        </p>
                        <h3 className="text-md font-bold flex items-center gap-2">
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 7.83334C6 8.36377 6.21071 8.87248 6.58579 9.24755C6.96086 9.62263 7.46957 9.83334 8 9.83334C8.53043 9.83334 9.03914 9.62263 9.41421 9.24755C9.78929 8.87248 10 8.36377 10 7.83334C10 7.30291 9.78929 6.7942 9.41421 6.41912C9.03914 6.04405 8.53043 5.83334 8 5.83334C7.46957 5.83334 6.96086 6.04405 6.58579 6.41912C6.21071 6.7942 6 7.30291 6 7.83334Z"
                                    stroke="#FEBA43"
                                    stroke-width="1.33333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M11.7713 11.6047L8.94267 14.4333C8.69266 14.6831 8.35372 14.8234 8.00034 14.8234C7.64695 14.8234 7.30801 14.6831 7.058 14.4333L4.22867 11.6047C3.48282 10.8588 2.97489 9.90847 2.76913 8.87391C2.56336 7.83935 2.669 6.76701 3.07267 5.79249C3.47635 4.81797 4.15993 3.98503 5.03699 3.39901C5.91405 2.81299 6.94518 2.5002 8 2.5002C9.05482 2.5002 10.086 2.81299 10.963 3.39901C11.8401 3.98503 12.5237 4.81797 12.9273 5.79249C13.331 6.76701 13.4366 7.83935 13.2309 8.87391C13.0251 9.90847 12.5172 10.8588 11.7713 11.6047Z"
                                    stroke="#FEBA43"
                                    stroke-width="1.33333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            Cidade, PB
                        </h3>
                    </div>
                    <div>
                        <img
                            src="https://static.vecteezy.com/ti/vetor-gratis/p1/10071559-barbearia-logo-barbearia-logo-modelo-vetor.jpg"
                            alt="logo da barbearia"
                            className="w-24 h-24 object-cover rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <p className="text-sm text-center py-3 border border-neutral-600 rounded-xl">
                        Corte que transforma, estilo que
                        impressiona.
                    </p>
                </div>
            </main>
        </div>
    );
}
