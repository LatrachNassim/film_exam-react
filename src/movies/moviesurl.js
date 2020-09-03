import React from 'react'




secondUrl = fetch('http://localhost:3000/movie/2', movieObj = {
    titre: '',
    date: '',
    categories: [],
    affiche: '',
    arrierePlan: '',
    listesActeurs:[],
    filmsSimilaires:[]
})
.then(() => {
    console.log(movieObj);
})
.catch((error) => console.error("Ce film n'existe pas"));


return(
    <div>
        <button onClick={}>Modifier</button>
        <button onClick={}>Supprimer</button>
    </div>
)

export default movieurl