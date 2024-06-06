import { config as configDotenv } from 'dotenv';
import server from './server';
import { printAppInfo } from './utils/print-app-info';
import appConfig from './config/app.config';
import environment from '@/lib/environment';
import * as admin from 'firebase-admin';
import { FirebaseAdminConfig } from '@/config/db';

configDotenv();

// Should be specified once
if (!admin.apps.length) {
  try {
    admin.initializeApp(new FirebaseAdminConfig().fC);
    // eslint-disable-next-line no-empty
  } catch (e) {
    console.log(e);
  }
}

server.listen(process.env.PORT || 4000, () => {
  const { port, env, appUrl: _appUrl } = environment;
  const {
    api: { basePath, version },
  } = appConfig;
  const appUrl = `${_appUrl}:${port}`;
  const apiUrl = `${appUrl}/${basePath}/${version}/${env}`;
  printAppInfo(port, env, appUrl, apiUrl);
});
