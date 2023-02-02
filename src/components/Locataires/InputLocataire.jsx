import React, {useState} from "react";
import {IonButton, IonList} from "@ionic/react";
import InputGeneric from "../../shared/InputGeneric";

export const InputLocataire=(props)=> {
    //newLocataire initialisé à vide car, pas de typage en js.
    const [newLocataire, setNewLocataire] = useState(
        {
            "nom":"",
            "prenom":"",
            "dateDeNaissance":"",
            "email":"",
            "telephone":""
        }
    )

    /**
     * HandleChangeValeur
     * Fonction liées aux input,
     * elle recupèrent la valeur de l'entrée d'un input générique
     * et implemente les valeurs des attribut d'un nouvel objet.
     * @param value
     */
    const handleChangeNom =
        (value) => {
            setNewLocataire({...newLocataire, nom: value})
        }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangePrenom = (value) => {
        setNewLocataire({...newLocataire, prenom: value})
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeEmail= (value) => {
        setNewLocataire({...newLocataire, email: value})
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangetelephone = (value) => {
        setNewLocataire({...newLocataire, telephone: value})
    }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeDateDeNaissance = (value) => {
        setNewLocataire({...newLocataire, dateDeNaissance: value})
    }

//Tableau afin de gerer les input via l'input generique
    const inputItem =
        [

            {
                "handleChange": handleChangeNom,
                "label": "Nom",
                "placeholder": "Entrer le Nom" || newLocataire.nom,
                "defaultValue": "" || newLocataire.nom
            },
            {
                "handleChange": handleChangePrenom,
                "label": "Prenom",
                "placeholder": "Entrer le prenom" || newLocataire.prenom,
                "defaultValue": "" || newLocataire.prenom
            },
            {
                "handleChange": handleChangetelephone,
                "label": "Telephone",
                "placeholder": "Entrer le Telephone" || newLocataire.telephone,
                "defaultValue": "" || newLocataire.telephone
            },
            {
                "handleChange": handleChangeEmail,
                "label": "Email",
                "placeholder": "Entrer l'email" || newLocataire.email,
                "defaultValue": "" || newLocataire.email
            },
            {
                "handleChange": handleChangeDateDeNaissance,
                "label": "Date yyyy-MM-dd",
                "placeholder": "Entrer la date de naissance" || newLocataire.dateDeNaissance,
                "defaultValue": "" || newLocataire.dateDeNaissance
            }
        ]

    /**
     * HandleAjout est la onction pour ajouter un locataire en base de données
     * @param newLocataire de type locataire
     */

    const handleAjout = () => {
        //console.log(newLocataire)
        props.handleAjout(newLocataire)
    }

    return (
        <>
            <IonList>
                {inputItem && inputItem.map((i, index) => {
                    return (<InputGeneric label={i.label}
                                          key={index}
                                          placeholder={i.placeholder}
                                          defaultValue={i.defaultValue}
                                          handleChange={i.handleChange}
                    />)
                })}
                <IonButton color="success" expand="block" onClick={handleAjout}>Ajouter</IonButton>
            </IonList>

        </>)
}
export default InputLocataire;


