import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

export const InputGeneric=(props)=> {
    const handleChange=(event)=>{
        props.handleChange(event.target.value)
    }
    return (
            <IonItem>
                <IonLabel position="floating">{props.label}</IonLabel>
                <IonInput placeholder={props.placeholder} onIonChange={handleChange} defaultValue={props.defaultValue}></IonInput>
            </IonItem>

    );
}
export default InputGeneric