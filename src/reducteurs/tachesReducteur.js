export const etatInitial = {
    taches: []
}

export function tachesReducteur(etat, action){
    switch (action.type) {
        case 'AJOUTER_TACHE': {
            const nouvelleTache = {
                id: Date.now(),
                texte : action.payload,
                estTerminee : false
            }
            return {
                ...etat,
                taches: [...etat.taches, nouvelleTache]
            }
        }

        case 'SUPPRIMER_TACHE' : {
            return {
                ...etat,
                taches : etat.taches.filter((tache) => tache.id !== action.payload)
            }
        }

        case 'TOGGLE_TACHE': {
            return{
                ...etat,
                taches: etat.taches.map((tache) => tache.id === action.payload ? {...tache, estTerminee: !tache.estTerminee} :tache)
            }
        }

        case 'VIDER_TERMINEES': {
            return {
                ...etat, taches: etat.taches.filter((tache) => !tache.estTerminee)
            }
        }

        default:
            return etat
    }
}