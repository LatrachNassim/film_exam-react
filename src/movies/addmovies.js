import React from 'react'
import axios from "axios";


const movie = axios.create(
    {"status_code":7,"status_message":"Invalid API key: You must be granted a valid key.","success":false}
)

return(
    <div>
        <label>

    <input list="titre" name="Titre" />  
</label>   
<datalist id="titre">
    <option value="Avengers end game" />
    <option value="Superman man of steel" />
    <option value="Sonic" />
    <option value="Harry Potter à l'écolde des soricers" />  
    movie{$titre} 
</datalist>

        <label>

    <input list="Date" name="Date de sortie" />  
</label>   
<datalist id="Date">
    <option value="Avenger end game" />
    <option value="Superman man of steel" />
    <option value="Sonic" />
    <option value="Harry Potter à l'écolde des soricers" />  
    movie{$Date} 
</datalist>
    </div>
)