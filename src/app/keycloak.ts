// src/keycloak.ts
import Keycloak  from 'keycloak-js';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const keycloakConfig = {
  url: 'http://0.0.0.0:8080/',  // Use /auth instead of /realms/hema-react
  realm: 'Hema-Clinic',
  clientId: 'hema-app',
};


const keycloak = new Keycloak(keycloakConfig);

export { keycloak, ReactKeycloakProvider };
