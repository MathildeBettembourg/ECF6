import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import AffichageLocatairesPages from "./AffichageLocatairesPage";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Locataires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Locataires</IonTitle>
          </IonToolbar>
        </IonHeader>

    <AffichageLocatairesPages/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
