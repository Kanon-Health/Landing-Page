import { defineFunction, secret } from '@aws-amplify/backend';

export const captureLead = defineFunction({
  name: 'capture-lead',
  environment: {
    // This is the only one you need now
    GOOGLE_SCRIPT_URL: secret('GOOGLE_SCRIPT_URL'),
  },
});