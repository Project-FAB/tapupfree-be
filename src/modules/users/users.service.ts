import * as admin from 'firebase-admin';
import { Users } from './users.controller';
import { FirebaseAdminConfig } from '@/config/db';

export default class UserService {
  constructor() {
    this.initializeFirebase();
  }
  private initializeFirebase() {
    if (!admin.apps.length) {
      try {
        admin.initializeApp(new FirebaseAdminConfig().fC);
        // eslint-disable-next-line no-empty
      } catch (e) {
        console.log(e);
      }
    }
  }

  public async getUserById(id: string) {
    this.initializeFirebase();
    try {
      let user: Users = {
        firstName: '',
        lastName: '',
        image: '',
        phoneNumber: '',
        company: '',
        position: '',
        email: '',
        createdAt: '',
        user_link: '',
        id: '',
        userCode: '',
        printStatus: false,
      };

      const db = admin.firestore();
      const userRed = db.collection('users');
      const query = userRed.where('userCode', '==', id);
      const snapshot = await query.get();
      snapshot.forEach((doc) => {
        const data = doc.data();
        user = {
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
          phoneNumber: data.phoneNumber,
          company: data.company,
          position: data.position,
          email: data.email,
          createdAt: data.createdAt,
          user_link: data.user_link,
          id: data.id,
          userCode: data.userCode,
          printStatus: data.printStatus,
        };
      });

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
