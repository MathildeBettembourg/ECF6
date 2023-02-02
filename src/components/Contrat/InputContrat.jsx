import React, {Fragment, useState} from "react";
import {IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption} from "@ionic/react";
import InputGeneric from "../../shared/InputGeneric";
import {checkmark, closeOutline} from "ionicons/icons";

export const InputContrat = (props) => {
    //newLocataire initialisé à vide car, pas de typage en js.
    const [newContrat, setNewContrat] = useState(
        {
            "locataire": {"id": ""},
            "vehicule": {"id": ""},
            "prix": 0,
            "prixLocation": 0,
            "fullstart": "",
            "fullend": ""
        }
    )

    // handleAjout={handleAjout}
    // setSelectLocataire={setSelectLocataire}
    // setSelectVehicule={setSelectVehicule}
    // listVehicules={listVehicules}
    // listLocataires={listLocataires}

    /**
     * HandleChangeValeur
     * Fonction liées aux input,
     * elle recupèrent la valeur de l'entrée d'un input générique
     * et implemente les valeurs des attribut d'un nouvel objet.
     * @param value
     */
    const handleChangePrix =
        (value) => {
            setNewContrat({...newContrat, prix: value})
        }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangePrixLocation = (value) => {
        setNewContrat({...newContrat, prixLocation: value})
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const [dissabledchoixLocVeh, setDisabledchoixLocVeh]=useState(false)
    const handleChangeLocataireEtVehicule = () => {
        setNewContrat({
                ...newContrat,
                locataire: {...newContrat.locataire, id: props.selectLocataire.id},
                vehicule: {...newContrat.vehicule, id: props.selectVehicule.id}
            }
        )
        setDisabledchoixLocVeh(true)
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeStart = (value) => {
        setNewContrat({...newContrat, fullstart: value})
    }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeEnd = (value) => {
        setNewContrat({...newContrat, fullend: value})
    }
    /**
     * HandleChangeLocataire est une fonction qui permet de selectionner un
     * locataire et de l'enregistrer
     * @param event
     */
    const handleChangeLocataire=(event)=>{
        props.setSelectLocataire(event.target.value)
}
    /***
     * HandleChangeVehicule est une fonction qui permet
     * de selectionner le vehicule
     * @param event
     */
    const handleChangeVehicule=(event)=>{
        props.setSelectVehicule(event.target.value)
}
    /**
     * HandleAjout est la onction pour ajouter un locataire en base de données
     * @param newLocataire de type locataire
     */
    const handleAjout = () => {
        console.log(newContrat)
        // props.handleAjout(newLocataire)
    }
const [checkLoc, setCheckLoc]=useState(false)
    const handleCheckLoc=()=>{
        setCheckLoc(true)
    }
    const [checkVeh, setCheckVeh]=useState(false)
    const handleCheckVeh=()=>{
        setCheckVeh(true)
    }
    return (
        <>
            <IonList>

                <IonItem>
                    <IonSelect placeholder="Locataire" onIonChange={handleChangeLocataire} disabled={checkLoc} >
                        {props.listLocataires && props.listLocataires.map((i, index) => {
                            return (
                                <Fragment key={index}>
                                    <IonSelectOption value={i}>M. MMe {i.nom}</IonSelectOption>
                                </Fragment>)
                        })
                        }

                    </IonSelect>
                    <IonButton onClick={handleCheckLoc}  color="success">
                        <IonIcon slot="icon-only" icon={checkmark}></IonIcon>
                    </IonButton>
                    <IonButton onClick={()=> setCheckLoc(false)}  color="danger">
                        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
                    </IonButton>
                </IonItem>

                <IonItem>
                    <IonSelect placeholder="Vehicules" disabled={checkVeh} onIonChange={handleChangeVehicule}>
                        {props.listVehicules && props.listVehicules.map((i, index)=>{
                        return (
                            <Fragment key={index}>
                                <IonSelectOption value={i}>{`${i.marque} - ${i.prix}€ / jour`}</IonSelectOption>
                            </Fragment>
                        )})
                        }

                    </IonSelect>
                    <IonButton onClick={handleCheckVeh}  color="success">
                        <IonIcon slot="icon-only" icon={checkmark}></IonIcon>
                    </IonButton>
                    <IonButton onClick={()=> setCheckVeh(false)}  color="danger">
                        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
                    </IonButton>
                </IonItem>
                <IonButton expand="block" onClick={handleChangeLocataireEtVehicule}> Valider</IonButton>

                <IonButton color="success" expand="block" onClick={handleAjout}>Ajouter</IonButton>
            </IonList>


        </>)
}
export default InputContrat;


