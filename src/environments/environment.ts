// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GENERATE_TOKEN_URL: "https://auth.mind2codes.com/auth/realms/defis-devs/protocol/openid-connect/token",
  API_URL: "http://5.182.33.229:5000",
  LOCAL_STORAGE_SECURE_STATUT: true,
  LOCAL_STORAGE_SECRET_KEY: "TestDefiStrategie"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
