import { cert } from 'firebase-admin/app';
export class FirebaseAdminConfig {
  public readonly fC = {
    credential: cert({
      projectId: process.env.FB_PROJECT_ID,
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey: process.env.FB_PRIVATE_KEY,
    }),
  };

  public readonly projectId = process.env.FB_PROJECT_ID;
}
