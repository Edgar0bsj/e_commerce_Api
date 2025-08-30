import db from "../database/connection.js";
import userRepository from "../repository/user.repository.js";
/**
 *=================== ///// ===================
 *
 * Type > User
 *
 *=============================================
 */
type User = {
  id: any;
  name: string;
  age: number;
};
/**
 *=================== ///// ===================
 *
 * Type > User Service
 *
 *=============================================
 */
type UserServer = {
  getAll: () => Promise<User[]>;
  getById: (id: string) => Promise<User>;
  submit: (body: any) => void;
  edit: (id: string, body: any) => void;
  delete: (id: string) => Promise<void>;
};
/**
 *=================== ///// ===================
 *
 * Function > Core sistem service user
 *
 *=============================================
 */
const userService = (): UserServer => {
  return {
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Get All
     * @returns -> Promise<User[]>
     *=============================================
     */
    getAll: async (): Promise<User[]> => {
      return userRepository.getAll();
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Get By ID User
     * @returns -> Promise<User>
     *=============================================
     */
    getById: async (id: string): Promise<User> => {
      const doc = await db.collection("user").doc(id).get();

      let user = {
        id: doc.id,
        ...doc.data(),
      } as User;

      return user;
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > submit
     * @returns -> Promise<void>
     *=============================================
     */
    submit: async (body: any): Promise<void> => {
      await db.collection("user").add(body);
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Edit
     * @returns -> Promise<void>
     *=============================================
     */
    edit: async (id: string, body: any): Promise<void> => {
      let user: Partial<User> = {
        name: body.name,
        age: body.age,
      };

      await db.collection("user").doc(id).set(user);
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Edit
     * @returns -> Promise<void>
     *=============================================
     */
    delete: async (id: string): Promise<void> => {
      await db.collection("user").doc(id).delete();
    },
  };
};

export default userService;
