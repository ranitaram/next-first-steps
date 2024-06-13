//importamos el Navbar desde la carpeta de components
import {Navbar} from "@/components"

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        //envolvemos el main en un fragmento <> </>
        //para que no cree un div o algo asi.
        <>
        <Navbar />
        <main className="flex flex-col items-center p-24">
            <h1>General Layout</h1>
            {children}
        </main>
        </>
    )
}