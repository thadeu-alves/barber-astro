export function Header() {
    const links = [
        {
            href: "/",
            title: "Início",
        },
        {
            href: "/galeria",
            title: "Galeria",
        },
        {
            href: "/precos",
            title: "Preços",
        },
    ];

    const path = window.location.pathname;
    return (
        <nav className="w-full bg-black text-white">
            <ul className="flex space-x-4 py-4 font-semibold justify-center">
                {links.map((link) => {
                    return (
                        <li
                            key={link.title}
                            className={
                                link.href == path
                                    ? "border-b-2 border-white"
                                    : ""
                            }
                        >
                            <a href={link.href}>
                                {link.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
