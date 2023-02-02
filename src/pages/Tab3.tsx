import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import AffichageContratsPage from "./AffichageContratsPage";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Locations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Locations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AffichageContratsPage/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
