// --------------------------------------------------------------------
// --------------------------------------------------------------------

import argon2 from "argon2";
import crypto, { Encoding } from "crypto";

/**
 * Hashing, salting, generate OTPs
 */
export class PasswordActions {
	private pepper: string;

	constructor(pepper: string) {
		this.pepper = pepper;
	}
	
	async hashPassword(password: string): Promise<string> {
		const passwordWithPepper = `${password}${this.pepper}`;
		return await argon2.hash(passwordWithPepper,
			{
				type: argon2.argon2id,
				memoryCost: 2 ** 16,
				timeCost: 3,
				parallelism: 1
			}
		);
	}

	async verifyPassword(storedHash: string, enteredPassword: string): Promise<boolean> {
		const passwordWithPepper = `${enteredPassword}${this.pepper}`;
		return await argon2.verify(storedHash, passwordWithPepper);
	}
}

/**
 * OAuth, Basic password auth, JWT, reCaptcha, fingerprints, certificates, OTPs, Links sent via email, SSO
 */

export class TokenBasedAuth {
	/**
	 * JWTs, Session tokens
	 */
}

export class OAuth {
	/**
	 * Log in with Google, Microsoft, Apple
	 */
}

/**
 * Biometric Auth
 */
interface IBiometricAuth {
	registerPasskey(): Promise<void>;
	loginWithPasskey(): Promise<void>;
	authenticateWithPasskey(): Promise<boolean>;
}

export class FingerprintAuth { }

export class FaceIDAuth { }

// --------------------------------------------------------------------
// Encryption and Decryption
//
// --------------------------------------------------------------------
interface ICryptoAlgorithm {
	/**
	 * 
	 */
	//generateKey(): Promise<Buffer>;

	/**
	 * 
	 * @param data 
	 */
	//encrypt(data: string): Promise<void>;

	/**
	 * 
	 * @param data 
	 */
	//decrypt(data: string): Promise<string>;
}

//
// Symmetric Encryption
//
export class AESEncryption implements ICryptoAlgorithm {
	private aesAlgorithm: string;
	private keyLength: number;
	private ivLength: number;
	private inputEncoding: Encoding;
	private outputEncoding: Encoding;

	constructor(aesAlgorithm: string, keyLength: number, ivLength: number, inputEncoding: Encoding, outputEncoding: Encoding) {
		this.aesAlgorithm = aesAlgorithm;
		this.keyLength = keyLength;
		this.ivLength = ivLength;
		this.inputEncoding = inputEncoding;
		this.outputEncoding = outputEncoding;
	}

	async generateKey(): Promise<Buffer> {
		return crypto.randomBytes(this.keyLength);
	}

	async encrypt(plainText: string, key: Buffer): Promise<{ encryptedData: string, iv: string, authTag: string }> {
		const iv = crypto.randomBytes(this.ivLength);
		const cipher = crypto.createCipheriv(this.aesAlgorithm, key, iv) as crypto.CipherGCM;

		let encrypted = cipher.update(plainText, this.inputEncoding, this.outputEncoding);
		encrypted += cipher.final(this.outputEncoding);

		return {
			encryptedData: encrypted,
			iv: iv.toString(this.outputEncoding),
			authTag: cipher.getAuthTag().toString(this.outputEncoding)
		};
	}
	
	//async decrypt(data: string): Promise<void> {}
	
}

export class ChaCha { }

/**
 * Asymmetric Encryption
 */
export class RSAEncryption { }

export class ECCEncryption { }

export class McElieceCryptosystem { }
