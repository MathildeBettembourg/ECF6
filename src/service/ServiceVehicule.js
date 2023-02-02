export class ServiceVehicule{

    async getVehicule(){
        return await fetch('http://localhost:8080/vehicules')
            .then(res=> res.json())
    }
    async getVehiculeById(id){
        return await fetch(`http://localhost:8080/vehicules/${id}`)
            .then((res)=> (res.json()))
    }
    async deleteVehiculeById(id){
        return await fetch(`http://localhost:8080/vehicules/${id}`,
        { method: 'DELETE' })
    }
    async ajouterVehicule(vehicule){
        return await fetch('http://localhost:8080/vehicules',
            {method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(vehicule)})
            .then(res=> res.json())
    }


}
export const serviceVehicule = Object(new ServiceVehicule())