function ElementTache({ tache, onToggle, onSupprimer}) {
    return(
        <div className={`flex items-center gap-4 p-4 bg-white rounded-xl border transition-all duration-200
      ${tache.estTerminee
        ? 'border-green-200 bg-green-50'
        : 'border-gray-200 hover:border-violet-200'
      }`}>
         
         <button onClick={() => onToggle(tache.id)} className="`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200
          ${tache.estTerminee
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-violet-500'
          }`">
          
          {tache.estTerminee && (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          )}

         </button>
         
         <span className={`flex-1 text-gray-800 transition-all duration-200
        ${tache.estTerminee ? 'line-through text-gray-400' : ''}`}>
            {tache.texte}
         </span>
        

        <button onClick={() => onSupprimer(tache.id)} className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        </div>
    )
}

export default ElementTache