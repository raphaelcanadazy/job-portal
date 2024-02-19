import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"job-portal-904ac","appId":"1:472350274698:web:4d05d6c61f353faccde973","storageBucket":"job-portal-904ac.appspot.com","apiKey":"AIzaSyCA9k3MSsUJNdJd07VehP_QF4Vy9bmWM2Q","authDomain":"job-portal-904ac.firebaseapp.com","messagingSenderId":"472350274698","measurementId":"G-1M2DZQ3X0H"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
