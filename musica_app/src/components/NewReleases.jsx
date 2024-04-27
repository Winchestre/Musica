export default function NewReleases({ newRelease }) {
    return (
        <main className="mt-6">
            <h1 className="text-xl font-bold">New Releases ({newRelease.length})</h1>
            <ul className="mt-4 grid grid-flow-col auto-cols-[61%] overflow-scroll overflow-x-contain md:overflow-hidden md:overflow-x-none md:auto-cols-auto md:gap-4">
                {
                    newRelease.map(item => (
                        <li key={item.id}>
                            <div>
                                <img src={`http://127.0.0.1:5000${item.image_url}`} width="140px" height="140px" alt={item.name} />
                                <div className="mt-2">
                                    <p className="text-xs text-neutral-500">{item.description}</p>
                                    <h5 className="text-sm">{item.name}</h5>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}