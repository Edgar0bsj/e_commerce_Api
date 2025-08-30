import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";

/**=============== Interface ===================
 *
 *@interface iUserRepository
 *
 * =================== ///// ===================
 */
interface iUserRepository {
  getAll(): Promise<any>;
  getOne(id: string): Promise<any>;
  create(user: { id: string; name: string; age: number }): Promise<any>;
  edit(user: { id: string; name: string; age: number }): Promise<any>;
  removi(id: string): Promise<any>;
}

/**============ class UserRepository ===========
 *
 * @description - Class core of repository
 *
 * =================== ///// ===================
 */

class UserRepository implements iUserRepository {
  private firebaseInit: ReturnType<typeof initializeApp>;
  private db: ReturnType<typeof getFirestore>;

  constructor() {
    this.firebaseInit = initializeApp();
    this.db = getFirestore();
  }

  async getAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getOne(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async create(user: { id: string; name: string; age: number }): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async edit(user: { id: string; name: string; age: number }): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async removi(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export default new UserRepository();
