import React, {Fragment, useEffect, useState} from "react";
import {serviceVehicule} from "../service/ServiceVehicule";
import {IonCard} from "@ionic/react";
import CardGeneric from "../shared/CardGeneric";
import SelectGeneric from "../shared/SelectGeneric";


export const AffichageVehiculesPage = () => {

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
                "immatriculation": "",
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
     * @param value
     */
    const handleChangeDispoVisibilite = (value) => {
        setVisibilité(value)
    }
    const itemSelect = [
        {"leg": "Disponible", "value": false},
        {"leg": "louée", "value": true},
        {"leg": "Tous", "value": ""}

    ]
    return (
        <>
            <SelectGeneric placeholder={'disponibilité'}
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
                                             titre={i.modele}
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