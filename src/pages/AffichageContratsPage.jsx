import React, {Fragment, useEffect, useRef, useState} from "react";
import {IonButton, IonCard, IonContent, IonModal} from "@ionic/react";
import InputLocataire from "../components/Locataires/InputLocataire";
import CardGeneric from "../shared/CardGeneric";
import {serviceContrats} from "../service/ServiceContrats";
import {serviceVehicule} from "../service/ServiceVehicule";
import {serviceLocataire} from "../service/ServiceLocataire";
import InputContrat from "../components/Contrat/InputContrat";

export const AffichageContratsPage = () => {
    const modal3 = useRef(null);
    const [listLocataires, setListLocataires] = useState([
        {
            "id": "",
            "nom": "",
            "prenom": "",
            "dateDeNaissance": "",
            "email": "",
            "telephone": ""
        }
    ])
    const [selectLocataire, setSelectLocataire] = useState(
        {
            "id": "",
            "nom": "",
            "prenom": "",
            "dateDeNaissance": "",
            "email": "",
            "telephone": ""
        })
    const [listVehicules, setListVehicules] = useState(
        [{
            "id": "",
            "modele": "",
            "etat": "",
            "prix": 0,
            "disponibilite": false,
            "marque": "",
            "immatriculation": ""
        }])
    const [selectVehicule, setSelectVehicule] = useState(
        {
            "id": "",
            "modele": "",
            "etat": "",
            "prix": 0,
            "disponibilite": false,
            "marque": "",
            "immatriculation": ""
        }
    )
    const [contratsList, setContratsList] = useState([
            {
                "locataire": {"id": ""},
                "vehicule": {"id": ""},
                "prix": 0,
                "prixLocation": 0,
                "fullstart": "",
                "fullend": ""
            }
        ]
    )

    /**
     * UseEffect ici pour recuperer tous les contrats en base de données et les afficher
     */
    useEffect(() => {
        serviceContrats.getContrats().then((res) => setContratsList(res))
    }, [])

    /**
     * UseEffect qui recupere tous les vehicules en base de données et les
     */
    useEffect(()=>{
        serviceVehicule.getVehicule().then((res)=> setListVehicules(res))
    }, [])

    useEffect(()=>{
        serviceLocataire.getLocataires().then((res)=> setListLocataires(res))
    }, [])


    const handleAjout=(newContrat)=>{
        serviceContrats.ajouterContrat(newContrat)
    }
    const setSelectLocataires=(value)=>{
        setSelectLocataire(value)
    }
    const setSelectVehicules=(value)=>{
        setSelectVehicule(value)
    }
    return (
        <>
            <IonButton id="open-modal3" expand="block" color="success">
                Ajouter une location
            </IonButton>
            <IonModal ref={modal3} trigger="open-modal3" initialBreakpoint={0.75} breakpoints={[0, 0.5, 0.75, 1]}>
                <IonContent className="ion-padding">
                    <InputContrat
                        handleAjout={handleAjout}
                        setSelectLocataire={setSelectLocataires}
                        setSelectVehicule={setSelectVehicules}
                        selectLocataire={selectLocataire}
                        selectVehicule={selectVehicule}
                        listVehicules={listVehicules}
                        listLocataires={listLocataires}
                    />
                </IonContent>
            </IonModal>

            {
                contratsList
                && contratsList.map((i, index) => {

                    return (
                        <Fragment key={index}>
                            <IonCard>
                                <CardGeneric i={i}
                                             type={3}
                                             titre={`${i.fullstart} ${i.fullend}`}
                                    //deleteById={deleteById}
                                             ssTitre={""}
                                             id={i.id}
                                    // itemList={[
                                    //     {"leg": "Email", "value": i.email}
                                    // ]}
                                />
                            </IonCard>
                        </Fragment>)
                })
            }


        </>
    )
}
export default AffichageContratsPage;