export class ServiceVehicule{
    //service connecté au back via e localhost:8080/locations,
    // back en java; cors policies desactivées sur chaque controllers,
    // accès simplifier, pas sécurisé ici

    /**
     * GET permet de recuperer en base de données tous les véhicules
     * elle return une promise de type any qui est un tableau d'objets de type Voiture
     * @returns {Promise<any>}
     */
    async getVehicule(){
        return await fetch('http://localhost:8080/vehicules')
            .then(res=> res.json())
    }
    /**
     * GETvehiculeById est une fonction qui permet de recuperer uniquement un véhicule via son id,
     * elle retourne un véhicule et ses détails en json
     * @param id string
     * @returns {Promise<any>}
     */
    async getVehiculeById(id){
        return await fetch(`http://localhost:8080/vehicules/${id}`)
            .then((res)=> (res.json()))
    }

    /**
     * DeleteVehiculeById est une fonction qui permet de
     * supprimer un vehicule en le ciblant avec son id
     * @param id de type string
     * @returns {Promise<Response>}
     */
    async deleteVehiculeById(id){
        return await fetch(`http://localhost:8080/vehicules/${id}`,
        { method: 'DELETE' })
    }

    /**
     * AjouterVehicule permet d'ajouter un vehicule en base de données
     * @param vehicule de type vehicule
     * @returns {Promise<any>}
     */
    async ajouterVehicule(vehicule){
        return await fetch('http://localhost:8080/vehicules',
            {method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicule)})
            .then(res=> res.json())
    }
    async modifierVehicule(vehicule, id){
        return await fetch(`http://localhost:8080/vehicules/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicule)
            })
            .then(response => response.json())
    }


}
export const serviceVehicule = Object(new ServiceVehicule())