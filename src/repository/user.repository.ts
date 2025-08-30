import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";

/**=============== Type User ===================
 *
 *@type User
 *
 * =================== ///// ===================
 */
export type User = {
  id: string;
  name: string;
  age: number;
};
/**=============== Interface ===================
 *
 *@interface iUserRepository
 *
 * =================== ///// ===================
 */
interface iUserRepository {
  getAll(): Promise<User[]>;
  getOne(id: string): Promise<User>;
  create(user: Partial<User>): Promise<void>;
  edit(user: User): Promise<void>;
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
   * @description - Composition of {getFirestore}
   *
   * =================== ///// ===================
   */
  private db: ReturnType<typeof getFirestore>;

  constructor() {
    initializeApp();
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
  async getAll(): Promise<User[]> {
    const data = await this.db.collection("user").get();
    const _user: User[] = await data.docs.map((el) => {
      return {
        id: el.id,
        ...el.data(),
      } as User;
    });
    return _user;
  }
  /**
   *
   * -> Get One User of data base
   *
   */
  async getOne(id: string): Promise<User> {
    const data = await this.db.collection("user").doc(id).get();
    const _user: User = {
      id: data.id,
      ...data.data(),
    } as User;

    return _user;
  }
  /**
   *
   * -> Create user
   *
   */
  async create(user: Partial<User>): Promise<void> {
    await this.db.collection("user").add(user);
  }
  /**
   *
   * -> Edit of user
   *
   */
  async edit(user: User): Promise<void> {
    const { id, ...restUser } = user;
    await this.db.collection("user").doc(id).set(restUser);
  }
  /**
   *
   * -> removi user of data base
   *
   */
  async removi(id: string): Promise<void> {
    await this.db.collection("user").doc(id).delete();
  }
}

export default new UserRepository();
