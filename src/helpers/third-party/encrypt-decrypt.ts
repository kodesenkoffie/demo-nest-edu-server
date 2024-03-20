import { hash, compare } from 'bcryptjs';

/**
 * Function creates the hash of the password (input string).
 * @param password - password string
 * @returns string
 */
export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, 10);
};

/**
 * Function compares the hash with string returns true or false based on comparison.
 * @param password - password string
 * @param hash - existing hash
 * @returns bool
 */
export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await compare(password, hash);
};
