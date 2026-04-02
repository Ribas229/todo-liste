import ElementTache from "../ElementTache/ElementTache";

function ListeTaches({ tachesFiltrees, onToggle, onSupprimer}){
    if(tachesFiltrees.length === 0){
        return(
            <div className="text-center py-12">
                <p className="text-4xl mb-4">🎉</p>
                <p className="text-gray-400">Aucune tâche ici !</p>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-3">
            {tachesFiltrees.map((tache) => (
                <ElementTache
                key={tache.id}
                tache={tache}
                onToggle={onToggle}
                onSupprimer={onSupprimer}
                />
            ))}
        </div>
    )
}

export default ListeTaches