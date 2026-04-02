const FILTRES = ['toutes','actives','terminees']

function FiltresTaches({filtreActif, onFiltreChange, nombreActives, onViderTerminees}) {
    return(
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <span className="text-sm text-gray-500">
                {nombreActives} tâche{nombreActives !== 1 ? 's' : ''} restante{nombreActives !== 1 ? 's' : ''}
            </span>

            <div className="flex gap-2">
                {FILTRES.map((filtre) => (
                    <button key={filtre} onClick={() => onFiltreChange(filtre)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize
              ${filtreActif === filtre
                ? 'bg-violet-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}>
                {filtre}

                    </button>
                ))}
                
            </div>
            
            <button onClick={onViderTerminees} className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-200">
                Vider terminées
            </button>
        </div>
    )
}

export default FiltresTaches

