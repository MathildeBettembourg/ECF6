import React, {Fragment, useEffect, useRef, useState} from "react";
import {serviceVehicule} from "../service/ServiceVehicule";
import {IonButton, IonCard, IonContent, IonItem, IonList, IonModal} from "@ionic/react";
import CardGeneric from "../shared/CardGeneric";
import SelectGeneric from "../shared/SelectGeneric";
import InputVehicule from "../components/Vehicule/InputVehicule";
import {serviceLocataire} from "../service/ServiceLocataire";
import InputLocataire from "../components/Locataires/InputLocataire";


export const AffichageLocatairesPages = () => {
    const modal2 = useRef(null);
    /**
     * DELETEBYID est une fonction pour supprimer les vehicules par leur id
     * @param id
     */
    const deleteById=(id)=>{
        serviceLocataire.deleteLocataireById(id)
    }


    //Liste de vehicule, initialisée ici car js, cela simplifie l'affichage
    const [listLocataires, setListLocataires] = useState(
        [
            {
                "id": "",
               "nom":"",
               "prenom":"",
               "dateDeNaissance":"",
               "email":"",
                "telephone":""
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
        serviceLocataire.getLocataires().then((res) => setListLocataires(res))
    }, [setVisibilité, deleteById])

    /**
     * DeleteVehicule est une fonction qui prend en parametre l'id d'un vehicule,
     * il le supprime en base de donnée grâce à l'appel de la fonction de type fetch qui est le service
     * @param id de type string
     */
    const deleteLocataire = (id) => {
        serviceLocataire.deleteLocataireById(id)
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


    /**
     * HandleAjout est la onction pour ajouter une voiture en base de données
     * @param newVehicule de type vehicule
     */
    const handleAjout=(newLocataire)=>{
        serviceLocataire.ajouterLocataire(newLocataire)
    }

    return (
        <>
            <IonButton id="open-modal2" expand="block" color="success">
                Ajouter un Locataire
            </IonButton>
            <IonModal ref={modal2} trigger="open-modal2" initialBreakpoint={0.75} breakpoints={[0, 0.5, 0.75,1]}>
                <IonContent className="ion-padding">
                    <InputLocataire handleAjout={handleAjout}/>
                </IonContent>
            </IonModal>

            {
                listLocataires
                && listLocataires.map((i, index) => {

                    return (
                        <Fragment key={index}>
                            <IonCard>
                                <CardGeneric i={i}
                                             type={1}
                                             titre={`M. Mme. ${i.nom} ${i.prenom}`}
                                             deleteById={deleteById}
                                             ssTitre={`Telephone ${i.telephone}`}
                                             id={i.id}
                                             itemList={[
                                                  {"leg": "Email", "value": i.email}
                                             ]}
                                />
                            </IonCard>
                        </Fragment>)
                })
            }


        </>
    )

}
export default AffichageLocatairesPages;