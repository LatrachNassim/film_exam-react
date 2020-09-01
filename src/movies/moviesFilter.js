import React from 'react'



class NameForm extends React.Component {
    render() {
        return (
            <div>
                <form className='formfilter'> 
                    <label>
                        Titre :
                    <input type="text" name="name" />
                    </label>
                    <label>
                        Date de sortie :
                    <input type="text" name="name" />
                    </label>
                    <label>
                        Catégories :
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        );
    }
}
