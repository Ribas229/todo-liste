import { useState } from "react";

function FormulaireAjout({ onAjouter }) {
    const [texte, setTexte] = useState('')

    function gererSoumission(e){
        e.preventDefault()

        if(!texte.trim()) return

        onAjouter(texte.trim())
        setTexte('')
    }

    return (
        <form onSubmit={gererSoumission} className="flex gap-3 mb-8">
            <input type="text" value={texte} onChange={(e) => setTexte(e.target.value)}
            placeholder="Ajouter une nouvelle tâche..." className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"/>
            <button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                Ajouter
            </button>
        </form>
    )
}

export default FormulaireAjout