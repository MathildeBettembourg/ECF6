import React, {Fragment, useEffect, useRef, useState} from "react";
import {serviceVehicule} from "../service/ServiceVehicule";
import {IonButton, IonCard, IonContent, IonItem, IonList, IonModal} from "@ionic/react";
import CardGeneric from "../shared/CardGeneric";
import SelectGeneric from "../shared/SelectGeneric";
import InputVehicule from "../components/Vehicule/InputVehicule";


export const AffichageVehiculesPage = () => {
    const modal = useRef(null);
    /**
     * DELETEBYID est une fonction pour supprimer les vehicules par leur id
     * @param id
     */
    const deleteById=(id)=>{
        serviceVehicule.deleteVehiculeById(id)
    }


    //Liste de vehicule, initialisée ici car js, cela simplifie l'affichage
    const [listVehicules, setListVehicules] = useState(
        [
            {
                "id": "",
                "modele": "",
                "etat": "",
                "prix": 0,
                "disponibilite": false,
                "marque": "",
                "immatriculation": ""
            }
        ]
    )
    //Constance et state qui vont servir pour le filtre
    const [visibilite, setVisibilité] = useState(true)

    /**
     * UseEffect ici il va remplacer les valeur vide de la list initialisée,
     * par les valeurs en base de données. Cela va ^etre activé à la création du composant eta la modification de la liste
     */
    useEffect(() => {
        serviceVehicule.getVehicule().then((res) => setListVehicules(res))
    }, [setVisibilité])

    /**
     * DeleteVehicule est une fonction qui prend en parametre l'id d'un vehicule,
     * il le supprime en base de donnée grâce à l'appel de la fonction de type fetch qui est le service
     * @param id de type string
     */
    const deleteVehicule = (id) => {
        serviceVehicule.deleteVehiculeById(id)
    }

    /**
     * Setting de la valeur du filtre qui est liée au select generique
     * qui gere le changement de valeur  de "value",
     * et donc de visibiité des voitures
     * @param value de type text
     */
    const handleChangeDispoVisibilite = (value) => {
        setVisibilité(value)
    }
    const itemSelect = [
        {"leg": "Disponibles", "value": false},
        {"leg": "Loués", "value": true},
        {"leg": "Tous", "value": ""}
    ]

    /**
     * HandleAjout est la onction pour ajouter une voiture en base de données
     * @param newVehicule de type vehicule
     */
    const handleAjout=(newVehicule)=>{
        serviceVehicule.ajouterVehicule(newVehicule)
    }
console.log("test")
    return (
        <>
                <IonButton id="open-modal" expand="block" color="secondary" >
            Ajouter une Voiture
                </IonButton>
                <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.75} breakpoints={[0, 0.5, 0.75,1]}>
                    <IonContent className="ion-padding">


                                <InputVehicule handleAjout={handleAjout}/>

                    </IonContent>
                </IonModal>
            <SelectGeneric placeholder={'Loués'}
                           handleChange={handleChangeDispoVisibilite}
                           itemSelect={itemSelect}
            />
            {
                listVehicules
                && listVehicules.filter(listVehicules => listVehicules.disponibilite !== visibilite).map((i, index) => {

                    return (
                        <Fragment key={index}>
                            <IonCard>
                                <CardGeneric i={i}
                                             type={2}
                                             titre={i.modele}
                                             deleteById={deleteById}
                                             ssTitre={i.immatriculation}
                                             id={i.id}
                                             itemList={[
                                                 {"leg": "Marque", "value": i.marque},
                                                 {"leg": "Prix/jours", "value": `${i.prix} euros`}
                                             ]}
                                />
                            </IonCard>
                        </Fragment>)
                })
            }


        </>
    )

}
export default AffichageVehiculesPage;