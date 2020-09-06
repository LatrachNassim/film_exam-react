import React from 'react';
import "./css/moviesFilter.css"



class NameForm extends React.Component {
    render() {
        return (
            <div>
                <form className='formfilter'> 
                    <label>
                        Titre :
                    <input type="text" name="Titre" />
                    </label>
                    <label>
                        Date de sortie :
                    <input type="date" name="Date" />
                    </label>
                    <label>
                        Catégories :
                    <input type="text" name="Categories" />
                    </label>
                    <div className="button">
                    <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        );
    }
}

export default moviesFilter