import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Virtuoso
          totalCount={100000}
          overscan={200}
          style={{ height: '100%', width: '100%' }}
          item={(index) => (
            <IonItem>
              <IonAvatar slot="start">
                <img
                  src={'https://picsum.photos/200?q=' + index}
                  loading="lazy"
                />
              </IonAvatar>
              <IonLabel>
                <p>Item {index}</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </IonLabel>
            </IonItem>
          )}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
