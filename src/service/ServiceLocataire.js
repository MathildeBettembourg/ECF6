export class ServiceLocataire{

    async getLocataires(){
        return await fetch('http://localhost:8080/locataires')
            .then(res=> res.json())
    }
    async getLocataireById(id){
        return await fetch(`http://localhost:8080/locataires/${id}`)
            .then((res)=> (res.json()))
    }
    async deleteLocataireById(id){
        return await fetch(`http://localhost:8080/locataires/${id}`,
            { method: 'DELETE' })
    }
    async ajouterLocataire(locataire){
        return await fetch('http://localhost:8080/locataires',
            {method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(locataire)})
            .then(res=> res.json())
    }

}
export const serviceLocataire = Object(new ServiceLocataire())