import {
    IonAccordion, IonAccordionGroup,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonItem, IonLabel, IonText
} from '@ionic/react';
import {Fragment} from "react";
export const CardGeneric=(props)=>{
    const deleteById=()=>{
        props.deleteById(props.id)
    }


return(<>

                <IonCardHeader>
                    <IonCardTitle>{props.titre}</IonCardTitle>
                    <IonCardSubtitle>{props.ssTitre}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonAccordionGroup>
                        <IonAccordion value="first">
                            <IonItem slot="header" color="light">
                                <IonLabel>Détails</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                {props.itemList && props.itemList.map((i, index)=>{
                                    return (
                                        <Fragment key={index}>
                                            <IonText > {i.leg} : {i.value}</IonText><hr/>
                                        </Fragment>)})
                                }
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>
                   <IonButton routerLink={`/Details/${props.id}`}>Tous les détails</IonButton>
                    <IonButton onClick={deleteById}>Supprimer</IonButton>
                    <IonButton>Modifier</IonButton>
                </IonCardContent>

    </>)

}
export default CardGeneric;