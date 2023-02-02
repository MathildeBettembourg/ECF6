import React, {Fragment} from "react";
import {IonItem, IonList, IonSelect, IonSelectOption} from "@ionic/react";


export const SelectGeneric=(props)=>{
    const handleChange=(event)=>{
        props.handleChange(event.target.value)
    }

    return (
        <>
            <IonList>
                <IonItem>
                    <IonSelect interface="popover" placeholder={props.placeholder} onIonChange={handleChange}>
                        {props.itemSelect && props.itemSelect.map((i, index)=> {
                        return (
                            <Fragment key={index}>
                                <IonSelectOption value={i.value}>{i.leg}</IonSelectOption>
                            </Fragment>
                        )})
                        }
                    </IonSelect>
                </IonItem>
            </IonList>
        </>
    )
}
export default SelectGeneric;
