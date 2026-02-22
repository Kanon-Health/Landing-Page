import { defineFunction, secret } from '@aws-amplify/backend';

export const captureLead = defineFunction({
  name: 'capture-lead',
  environment: {
    SPREADSHEET_ID: secret('SPREADSHEET_ID'),
  },
});