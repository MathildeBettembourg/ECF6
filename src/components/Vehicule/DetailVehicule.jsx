import React, {useEffect, useState} from "react";
import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage, IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useParams} from "react-router";
import {serviceVehicule} from "../../service/ServiceVehicule";
import CardGeneric from "../../shared/CardGeneric";


export const DetailVehicule = () => {
    const {id} = useParams()

    const [detailObjectVehicule, setDetailObjectVehicule] = useState(
        {
            "id": "",
            "modele": "",
            "etat": "",
            "prix": 0,
            "disponibilite": false,
            "marque": "",
            "immatriculation": "",
        })
    /**
     * Useeffect permet de recuperer le vehicule choisis et de l'afficher par la suite
     */
    useEffect(() => {
        serviceVehicule.getVehiculeById(id).then((res) => setDetailObjectVehicule(res))
    }, [id])

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Details</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Details</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    {detailObjectVehicule &&
                        <IonCard>
                            <img alt="Silhouette of mountains"
                                 src="https://ionicframework.com/docs/img/demos/card-media.png"/>
                            <IonCardHeader>
                                <IonCardTitle>{detailObjectVehicule.marque}</IonCardTitle>
                                <IonCardSubtitle>{detailObjectVehicule.disponibilite}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                               <IonText>Prix/jours : {detailObjectVehicule.prix}</IonText><hr/>
                                <IonText> Modele : {detailObjectVehicule.modele}</IonText><hr/>
                                <IonText>Etat : {(detailObjectVehicule.etat)=="A"? "Tr??s Bon":"B"? "Bon":"C"?"Moyen":"D"?"Mauvais":"P"?"Panne":"Non communiqu??"}</IonText><hr/>
                                <IonText>Immatriculation : {detailObjectVehicule.immatriculation}</IonText>
                            </IonCardContent>
                        </IonCard>
                    }
                </IonContent>
            </IonPage>

        </>
    )
}
export default DetailVehicule;