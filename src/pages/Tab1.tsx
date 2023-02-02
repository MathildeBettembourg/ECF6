import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import AffichageVehiculesPage from "./AffichageVehiculesPage";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Vehicules</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Vehicules</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <AffichageVehiculesPage/>


            </IonContent>
        </IonPage>
    );
};

export default Tab1;
