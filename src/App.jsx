import { useEffect, useReducer, useState } from "react"
import { etatInitial, tachesReducteur } from "./reducteurs/tachesReducteur"
import FormulaireAjout from "./components/FormulaireAjout/FormulaireAjout"
import ListeTaches from "./components/ListeTaches/ListeTaches"
import FiltresTaches from "./components/FiltreTaches/FiltreTaches"

function initialiser(etatParDefaut){
  const tachesSauvegardees = localStorage.getItem('taches')
  if(tachesSauvegardees) {
    return {taches: JSON.parse(tachesSauvegardees)}
  }
  return etatParDefaut
}

function App() {
  const [etat, dispatch] = useReducer(tachesReducteur, etatInitial, initialiser)

  const [filtreActif, setFiltreActif] = useState('toutes')

  useEffect(() => {
    localStorage.setItem('taches', JSON.stringify(etat.taches))
  }, [etat.taches])

  function ajouterTache(texte) {
    dispatch( {type : 'AJOUTER_TACHE', payload : texte} )
  }

  function toggleTache(id) {
    dispatch( {type : 'TOGGLE_TACHE', payload : id} )
  }

  function supprimerTache(id) {
    dispatch( {type : 'SUPPRIMER_TACHE', payload : id} )
  }

  function viderTerminees() {
    dispatch( {type : 'VIDER_TERMINEES' } )
  }


  const tachesFiltrees = etat.taches.filter((tache) => {
    if(filtreActif === 'actives') return !tache.estTerminee
    if(filtreActif === 'terminees') return tache.estTerminee
    return true
  })

  const nombreActives = etat.taches.filter((t) => !t.estTerminee).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-lg">
           
           <div className="text-center mb-10">
             <h1 className="text-4xl font-bold text-gray-800 mb-2">Ma Todo Liste</h1>
             <p className="text-gray-500">
              {etat.taches.length} tâche{etat.taches.length !== 1 ? 's' : ''} au total
             </p>
           </div>

           <FormulaireAjout onAjouter={ajouterTache} />

           {etat.taches.length > 0 && (
            <FiltresTaches 
            filtreActif={filtreActif}
            onFiltreChange={setFiltreActif}
            nombreActives={nombreActives}
            onViderTerminees={viderTerminees}
            />
           )}

           <ListeTaches 
           tachesFiltrees={tachesFiltrees}
           onToggle={toggleTache}
           onSupprimer={supprimerTache}
           />
      </div>
    </div>
  )
}

export default App
