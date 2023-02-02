export class ServiceContrats{

    async getContrats(){
        return await fetch('http://localhost:8080/locations')
            .then(res=> res.json())
    }
    async getContratById(id){
        return await fetch(`http://localhost:8080/locations/${id}`)
            .then((res)=> (res.json()))
    }
    async deleteContratById(id){
        return await fetch(`http://localhost:8080/locations/${id}`,
            { method: 'DELETE' })
    }
    async ajouterContrat(contrat){
        return await fetch('http://localhost:8080/locations',
            {method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contrat)})
            .then(res=> res.json())
    }

}
export const serviceContrats = Object(new ServiceContrats())