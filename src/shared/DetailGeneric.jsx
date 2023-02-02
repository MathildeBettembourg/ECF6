import React, {useEffect, useState} from "react";
import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useParams} from "react-router";
import {serviceVehicule} from "../service/ServiceVehicule";
import CardGeneric from "./CardGeneric";


export const DetailGeneric = () => {
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
                    {detailObjectVehicule && detailObjectVehicule.map((i, index) => {
                        return (
                            <>
                                <IonCard>
                                    <img alt="Silhouette of mountains"
                                         src="https://ionicframework.com/docs/img/demos/card-media.png"/>
                                    <IonCardHeader>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        Here's a small text description for the card content. Nothing more, nothing
                                        less.
                                    </IonCardContent>
                                </IonCard>
                                );
                            </>

                        )
                    })
                    }
                </IonContent>
            </IonPage>

        </>
    )
}
export default DetailGeneric;