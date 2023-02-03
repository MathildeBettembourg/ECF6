import React, {useEffect, useState} from "react";
import SelectGeneric from "../../shared/SelectGeneric";
import {serviceVehicule} from "../../service/ServiceVehicule";
import {IonButton, IonList} from "@ionic/react";
import InputGeneric from "../../shared/InputGeneric";

export const InputVehicule = (props) => {
    const [newVehicule, setNewVehicule] = useState(
        {
            "modele": "",
            "etat": "",
            "prix": 0,
            "disponibilite": false,
            "marque": "",
            "immatriculation": "",
        }
    )
    useEffect(() => {
     setNewVehicule({...newVehicule, ...props.infoVehicule})
    }, [props.infovehicule])
    //SelectEtat est le tableau pour le composant selectGeneric
    const selectEtat = [
        {"value": "A", "leg": "Très Bon"},
        {"value": "B", "leg": "Bon"},
        {"value": "C", "leg": "Moyen"},
        {"value": "D", "leg": "Mauvais"},
        {"value": "P", "leg": "Panne"}
    ]
//SelectDispo est le tableau pour le composant select generique
    const selectDispo = [
        {"value": true, "leg": "Disponible"},
        {"value": false, "leg": "Louée"},
    ]
    /**
     * HandleChangeValeur
     * Fonction liées aux input,
     * elle recupèrent la valeur de l'entrée d'un input générique
     * et implemente les valeurs des attribut d'un nouvel objet.
     * @param value
     */
    const handleChangeModele =
        (value) => {
            setNewVehicule({...newVehicule, modele: value})
        }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeImmatriculation = (value) => {
        setNewVehicule({...newVehicule, immatriculation: value})
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeEtat = (value) => {
        setNewVehicule({...newVehicule, etat: value})
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeMarque = (value) => {
        setNewVehicule({...newVehicule, marque: value})
    }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangePrix = (value) => {
        setNewVehicule({...newVehicule, prix: value})
    }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeDispo = (value) => {
        setNewVehicule({...newVehicule, disponibilite: value})
    }
//Tableu infin de gerer les input
    const inputItem =
        [

            {
                "handleChange": handleChangeModele,
                "label": "Modele",
                "placeholder": newVehicule.modele,
                "defaultValue": newVehicule.modele
            },
            {
                "handleChange": handleChangeMarque,
                "label": "Marque",
                "placeholder": newVehicule.marque,
                "defaultValue":newVehicule.marque
            },
            {
                "handleChange": handleChangePrix,
                "label": "Prix",
                "placeholder": newVehicule.prix,
                "defaultValue": newVehicule.prix
            },
            {
                "handleChange": handleChangeImmatriculation,
                "label": "Immatriculation",
                "placeholder":  newVehicule.immatriculation,
                "defaultValue": newVehicule.immatriculation
            }
        ]

    /**
     * HandleAjout est la onction pour ajouter une voiture en base de données
     * @param newVehicule de type vehicule
     */
    const handleAjout = () => {
        props.handleAjout(newVehicule)
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
                <SelectGeneric placeholder={"Etat"} itemSelect={selectEtat} handleChange={handleChangeEtat}/>
                <SelectGeneric placeholder={"Disponibilité"} itemSelect={selectDispo} handleChange={handleChangeDispo}/>
                <IonButton expand="block" color="secondary" onClick={handleAjout}>Ajouter</IonButton>
            </IonList>

        </>)


}

export default InputVehicule