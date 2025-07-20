import { sign, verify } from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export class AuthService {
  static hashPassword(password: string) {
    return hashSync(password, 10);
  }
  static comparePassword(password: string, hash: string) {
    return compareSync(password, hash);
  }
  static signJWT(value: object) {
    return sign(value, process.env.JWT_SECRET!);
  }
  static verifyJWT(token: string) {
    return verify(token, process.env.JWT_SECRET!);
  }

  static fixedEncryption(value: string) {
    // encryption algorithm
    const algorithm = 'aes-256-cbc';
    
    // Create a 32-byte key from JWT_SECRET
    const key = crypto.scryptSync(process.env.JWT_SECRET!, 'salt', 32);
    
    // Generate a random initialization vector
    const iv = crypto.randomBytes(16);
    
    // create a cipher object
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // encrypt the plain text
    let encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Prepend IV to encrypted data
    return iv.toString('hex') + ':' + encrypted;
  }

  static fixedDecryption(hash: string) {
    const algorithm = 'aes-256-cbc';
    
    // Check if this is new format (contains ':' separator for IV)
    if (hash.includes(':')) {
      // New format with IV
      const key = crypto.scryptSync(process.env.JWT_SECRET!, 'salt', 32);
      const [ivHex, encryptedHex] = hash.split(':');
      const iv = Buffer.from(ivHex, 'hex');
      
      const decipher = crypto.createDecipheriv(algorithm, key, iv);
      let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      
      return decrypted;
    } else {
      // Legacy format - try to decrypt with old method (if supported by Node.js version)
      try {
        // This will work in older Node.js versions that still support createDecipher
        const decipher = (crypto as any).createDecipher(algorithm, process.env.JWT_SECRET);
        let decrypted = decipher.update(hash, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
      } catch (e) {
        // If createDecipher is not available, we can't decrypt legacy data
        throw new Error('Cannot decrypt legacy encrypted data. Please re-encrypt with updated method.');
      }
    }
  }
}
