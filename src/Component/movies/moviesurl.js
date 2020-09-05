import React from 'react'


class newUrl extends React.Component {

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

function editMovie(event) {

}

function deleteMovie(e) {

}


    return (
        <div>
            <button onClick={editMovie(movieObj)}>Modifier</button>
            <button onClick={deleteMovie(movieObj)}>Supprimer</button>
        </div>
    )
    



export default movieurl