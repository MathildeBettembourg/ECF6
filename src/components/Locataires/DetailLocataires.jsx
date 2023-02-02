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
import {serviceLocataire} from "../../service/ServiceLocataire";

export const DetailLocataires = () => {
    const {id} = useParams()

    const [detailObjectLocataire, setDetailObjectLocataire] = useState(
        {
            "id": "",
            "nom":"",
            "prenom":"",
            "dateDeNaissance":"",
            "email":"",
            "telephone":""
        })

    /**
     * UseEffect ici recupere les données du locataire selectionné dans la base de données.
     * il set ensuite 'état du "detailObjectLocatairte"
     */
    useEffect(() => {
        serviceLocataire.getLocataireById(id).then((res) => setDetailObjectLocataire(res))
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
                    {detailObjectLocataire &&
                        <IonCard>
                            <img alt="Silhouette of mountains"
                                 src="https://ionicframework.com/docs/img/demos/card-media.png"/>
                            <IonCardHeader>
                                <IonCardTitle>{detailObjectLocataire.nom}</IonCardTitle>
                                <IonCardSubtitle>{detailObjectLocataire.prenom}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                               <IonText>Téléphone : {detailObjectLocataire.telephone}</IonText><hr/>
                                <IonText> Email : {detailObjectLocataire.email}</IonText><hr/>
                                <IonText>Naissance : {detailObjectLocataire.dateDeNaissance}</IonText><hr/>
                            </IonCardContent>
                        </IonCard>
                    }
                </IonContent>
            </IonPage>

        </>
    )
}
export default DetailLocataires;