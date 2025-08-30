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
  create(user: { id: string; name: string; age: number }): Promise<void>;
  edit(user: { id: string; name: string; age: number }): Promise<void>;
  removi(id: string): Promise<void>;
}

/**============ Class UserRepository ===========
 *
 * @description - Class core of repository
 *
 * =================== ///// ===================
 */

class UserRepository implements iUserRepository {
  /**============ Attributes =====================
   *
   * @description - Composition of {initializeApp , initializeApp}
   *
   * =================== ///// ===================
   */
  private firebaseInit: ReturnType<typeof initializeApp>;
  private db: ReturnType<typeof getFirestore>;

  constructor() {
    this.firebaseInit = initializeApp();
    this.db = getFirestore();
  }
  /**================= Methods ===================
   *
   * @description - Class core of repository
   *
   * =================== ///// ===================
   */
  /**
   *
   * -> Get all users
   *
   */
  async getAll(): Promise<any> {
    const data = await this.db.collection("user").get();
    const user = await data.docs.map((el) => {
      return {
        id: el.id,
        ...el.data(),
      };
    });
    return user;
  }
  /**
   *
   * -> Get One User of data base
   *
   */
  async getOne(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   *
   * -> Create user
   *
   */
  async create(user: { id: string; name: string; age: number }): Promise<void> {
    throw new Error("Method not implemented.");
  }
  /**
   *
   * -> edit of user
   *
   */
  async edit(user: { id: string; name: string; age: number }): Promise<void> {
    throw new Error("Method not implemented.");
  }
  /**
   *
   * -> removi user of data base
   *
   */
  async removi(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default new UserRepository();
