export class ServiceContrats{

    /**
     * GetContrat est un service qui permet de recupere tous les contrats en base de données
     * @returns {Promise<any>}
     */
    async getContrats(){
        return await fetch('http://localhost:8080/locations')
            .then(res=> res.json())
    }

    /**
     * getContratsById est un service qui permet de recuperer pqr leur id les locations en base de donnée
     */

    async getContratById(id){
        return await fetch(`http://localhost:8080/locations/${id}`)
            .then((res)=> (res.json()))
    }

    /**
     * DeleteContratById est un service qui permet de supprimer
     * une location en base de données en la ciblant via son id
     * @param id de type string
     * @returns {Promise<Response>}
     */
    async deleteContratById(id){
        return await fetch(`http://localhost:8080/locations/${id}`,
            { method: 'DELETE' })
    }

    /**
     * Ajouter un contrat est une onction de type post qui permet d'ajouter un contrat en base de données
     * @param contrat
     * @returns {Promise<any>}
     */
    async ajouterContrat(contrat){
        return await fetch('http://localhost:8080/locations',
            {method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contrat)})
            .then(res=> res.json())
    }

}
export const serviceContrats = Object(new ServiceContrats())