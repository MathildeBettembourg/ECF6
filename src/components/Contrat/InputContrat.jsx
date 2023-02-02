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
    const[valDisTT, setValDisTT]=useState(true)
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
     *HandleChangeLocataireEtVehicule est une fonction qui s'active une fois le locataire et le vehicule choisis,
     * elle permet de setter l'id du locataire et du vehicule dans l'objet nouvelle location,
     * en même temps elle permet à l'utilisateur d'acceder à l'étape suivante de la réservation
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
     *   HandleChangeStart
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      Ici on change la date de debut de la location
     *      @param value
     */
    const handleChangeStart = (event) => {
        setNewContrat({...newContrat, fullstart: event.target.value})
    }
    /**
     *   HandleChangeEnd
     *      Fonction liées aux input,
     *      elle recupèrent la valeur de l'entrée d'un input générique
     *      et implemente les valeurs des attribut d'un nouvel objet.
     *      Ici on set la fin de location
     *      @param value
     */
    const handleChangeEnd = (event) => {
        setNewContrat({...newContrat, fullend: event.target.value})
    }
    /**
     * HandleChangeLocataire est une fonction qui permet de selectionner un
     * locataire et de l'enregistrer dans le parent, il va servir pour recuperer des informations par la suite
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
     * HandleAjout est la fonction pour ajouter un onstrat en base de données
     * @param newContrat de type location
     */
    const handleAjout = () => {
        props.handleAjout(newContrat)
    }

    /**
     * Gestion affichage handle checklock permet de disable le choix du locataire et de rendre accessible le choix du vehicule
     */
    const handleCheckLoc = () => {
        setCheckLoc(true)
        setCheckVeh(false)
    }
    /**
     * Gestion de laffichage, elle permet de rendre le select du vehicule inaccessible,
     * et permet de rendre le bouton de validation accessible et de meme les date par la suite
     */
    const handleCheckVeh = () => {
        setCheckVeh(true)
        setdateDisVal(false)
    }

    /**
     * HandleCheckValidationDates est une fonction qui permet de gere le front;
     * elle permet de rendre les input dates disables et permet d'acceder a la suite de la validation de la réservation
     */
    const handleValidationDates =()=>{
        setDateDis(true)
        setdateDisVal(true)
        setValDisTT(false)

        if(newContrat.fullend<newContrat.fullstart){
            alert("La date du début doit être AVANT la date de fin !")
            setDateDis(false)
            setdateDisVal(false)
            setValDisTT(true)
        }else{
            //console.log(((((new Date(newContrat.fullend)).getTime()) - (new Date(newContrat.fullstart)).getTime())/(1000*3600*24))+1 )
            setNewContrat({...newContrat,
                prix:props.selectVehicule.prix,
                prixLocation: ((props.selectVehicule.prix)*(((((new Date(newContrat.fullend)).getTime()) - (new Date(newContrat.fullstart)).getTime())/(1000*3600*24))+1))})
        }
    }
    /**
     * HandleChangeInfo est une fonction qui permet de remettre tout l'affichage à 0 en quelque sorte
     * et de fait de modifier a nouveau si besoin des informations
     * pour la location
     * cel n'efface en rienles données deja settées !
     */
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
                <IonButton color="success" expand="block" disabled={valDisTT} onClick={handleAjout}>Créer la réservation </IonButton>
            </IonList>


        </>)
}
export default InputContrat;


