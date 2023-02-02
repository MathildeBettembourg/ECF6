import React, {Fragment, useState} from "react";
import {
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonItemGroup,
    IonLabel,
    IonList,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import InputGeneric from "../../shared/InputGeneric";
import {checkmark, closeOutline} from "ionicons/icons";

export const InputContrat = (props) => {
    const [checkLoc, setCheckLoc] = useState(false)
    const [checkVeh, setCheckVeh] = useState(true)
    const [dateDisVal, setdateDisVal]=useState(true)
    const [dateDis, setDateDis]=useState(true)
    const[disSelect, setDisSelect]=useState(false)
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
    const [dissabledchoixLocVeh, setDisabledchoixLocVeh] = useState(false)
    /**
     *
     */
    const handleChangeLocataireEtVehicule = () => {
        setNewContrat({
                ...newContrat,
                locataire: {...newContrat.locataire, id: props.selectLocataire.id},
                vehicule: {...newContrat.vehicule, id: props.selectVehicule.id}
            }
        )
        setDisabledchoixLocVeh(true)
        setDateDis(false)
    }

    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeStart = (event) => {
        setNewContrat({...newContrat, fullstart: event.target.value})
    }
    /**
     *   HandleChangeValeur
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      @param value
     */
    const handleChangeEnd = (event) => {
        setNewContrat({...newContrat, fullend: event.target.value})
    }
    /**
     * HandleChangeLocataire est une fonction qui permet de selectionner un
     * locataire et de l'enregistrer
     * @param event
     */
    const handleChangeLocataire = (event) => {
        props.setSelectLocataire(event.target.value)
    }
    /***
     * HandleChangeVehicule est une fonction qui permet
     * de selectionner le vehicule
     * @param event
     */
    const handleChangeVehicule = (event) => {
        props.setSelectVehicule(event.target.value)
    }
    /**
     * HandleAjout est la onction pour ajouter un locataire en base de données
     * @param newLocataire de type locataire
     */
    const handleAjout = () => {
        props.handleAjout(newContrat)
    }

    const handleCheckLoc = () => {
        setCheckLoc(true)
        setCheckVeh(false)
    }

    const handleCheckVeh = () => {
        setCheckVeh(true)
        setdateDisVal(false)
    }

    const handleValidationDates =()=>{
        setDateDis(true)
        setdateDisVal(true)
        if(newContrat.fullend<newContrat.fullstart){
            alert("La date du début doit être AVANT la date de fin !")
            setDateDis(false)
            setdateDisVal(false)
        }else{
            //console.log(((((new Date(newContrat.fullend)).getTime()) - (new Date(newContrat.fullstart)).getTime())/(1000*3600*24))+1 )
            setNewContrat({...newContrat,
                prix:props.selectVehicule.prix,
                prixLocation: ((props.selectVehicule.prix)*(((((new Date(newContrat.fullend)).getTime()) - (new Date(newContrat.fullstart)).getTime())/(1000*3600*24))+1))})
        }
    }
    const handleChangeInfo=()=>{
       setDateDis(false)
        setCheckLoc(false)
       setCheckVeh(true)
        setdateDisVal(true)
        setDateDis(true)
        setDisSelect(false)
        setDisabledchoixLocVeh(false)
    }
    return (
        <>
            <IonList>

                <IonItem disabled={disSelect}>
                    <IonSelect placeholder="Locataire" onIonChange={handleChangeLocataire} disabled={checkLoc}>
                        {props.listLocataires && props.listLocataires.map((i, index) => {
                            return (
                                <Fragment key={index}>
                                    <IonSelectOption value={i}>M. MMe {i.nom}</IonSelectOption>
                                </Fragment>)
                        })
                        }

                    </IonSelect>
                    <IonButton onClick={handleCheckLoc} color="success">
                        <IonIcon slot="icon-only" icon={checkmark}></IonIcon>
                    </IonButton>
                    <IonButton onClick={() => setCheckLoc(false)} color="danger">
                        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
                    </IonButton>
                </IonItem>

                <IonItem disabled={disSelect}>
                    <IonSelect placeholder="Vehicules" disabled={checkVeh} onIonChange={handleChangeVehicule}>
                        {props.listVehicules && props.listVehicules.map((i, index) => {
                            return (
                                <Fragment key={index}>
                                    <IonSelectOption value={i}>{`${i.marque} - ${i.prix}€ / jour`}</IonSelectOption>
                                </Fragment>
                            )
                        })
                        }

                    </IonSelect>
                    <IonButton onClick={handleCheckVeh} color="success">
                        <IonIcon slot="icon-only" icon={checkmark}></IonIcon>
                    </IonButton>
                    <IonButton onClick={() => setCheckVeh(false)} color="danger">
                        <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
                    </IonButton>
                </IonItem>

                <IonButton disabled={dateDisVal} expand="block" onClick={handleChangeLocataireEtVehicule}> Valider</IonButton>

                <IonList>
                    <IonItem disabled={dateDis}>
                        <IonLabel position="floating">Début</IonLabel>
                        <IonInput type="date"
                                  onIonChange={handleChangeStart}
                                  placeholder={"Entrer le début"}></IonInput>
                    </IonItem>
                    <IonItem disabled={dateDis}>
                        <IonLabel position="floating">Fin</IonLabel>
                        <IonInput type="date"
                                  onIonChange={handleChangeEnd}
                                  placeholder={"Entrer la fin"}></IonInput>
                    </IonItem>
                </IonList>
                {dateDis==false?
                    <IonButton onClick={handleValidationDates}>Valider les Dates</IonButton>:
                        <IonButton onClick={handleChangeInfo}>Changer Les Informations</IonButton>}
                <IonButton color="success" expand="block" onClick={handleAjout}>Créer la réservation </IonButton>
            </IonList>


        </>)
}
export default InputContrat;


