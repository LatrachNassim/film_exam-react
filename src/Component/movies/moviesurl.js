import React from 'react';
import "./css/moviesurl.css"


class newUrl extends React.Component {
// Ajout d'une nouvelle url
    secondUrl = fetch('http://localhost:3000/movie/2', movieObj = {
        titre: '',
        date: '',
        categories: [],
        affiche: '',
        arrierePlan: '',
        listesActeurs: [],
        filmsSimilaires: []
    })
        .then(() => {
            console.log(movieObj);
        })
        .catch((error) => console.error("Ce film n'existe pas"));
    }
// fonction pour les boutons modifier et supprimer
function editMovie(event) {

}

function deleteMovie(e) {

}


    return (
        <div className="btn-spe">
            <button onClick={editMovie(event)}>Modifier</button>
            <button onClick={deleteMovie(e)}>Supprimer</button>
        </div>
    )
    



export default movieurl