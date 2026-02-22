import { defineFunction, secret } from '@aws-amplify/backend';

export const captureLead = defineFunction({
  name: 'capture-lead',
  environment: {
    GOOGLE_CLIENT_EMAIL: secret('GOOGLE_CLIENT_EMAIL'),
    GOOGLE_PRIVATE_KEY: secret('GOOGLE_PRIVATE_KEY'),
    GOOGLE_PROJECT_ID: secret('GOOGLE_PROJECT_ID'),
    SPREADSHEET_ID: secret('SPREADSHEET_ID'),
  },
});