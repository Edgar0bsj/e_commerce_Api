import userRepository from "../repository/user.repository.js";
import type { User } from "../repository/user.repository.js";

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
  edit: (body: User) => void;
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
      return await userRepository.getAll();
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Get By ID User
     * @returns -> Promise<User>
     *=============================================
     */
    getById: async (id: string): Promise<User> => {
      return await userRepository.getOne(id);
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > submit
     * @returns -> Promise<void>
     *=============================================
     */
    submit: async (body: Partial<User>): Promise<void> => {
      return await userRepository.create(body);
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Edit
     * @returns -> Promise<void>
     *=============================================
     */
    edit: async (body: User): Promise<void> => {
      return userRepository.edit(body);
    },
    /**
     *=================== ///// ===================
     *
     * Function > Funtion > Edit
     * @returns -> Promise<void>
     *=============================================
     */
    delete: async (id: string): Promise<void> => {
      userRepository.removi(id);
    },
  };
};

export default userService;
