/**
 *
 * User inputs password, then password is salted, hashed, encrypted then stored in the database. Maybe add another layer of encryption to the DB
 *
 */



/**
 * Hashing, salting, generate OTPs
 */
export class PasswordActions {
	constructor() {
	}

	async generateSalt() {}

	async hashPassword() {}
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

export class BiometricAuth {
	/**
	 * FaceID, fingerprint, voice
	 */
}

/**
 * Symmetric(AES, DES(obsolete), 3DES), Asymmetric(RSA, ECC), File hashing(SHA-2, SHA-3), FDE, File Encryption, end-to-end, DB Encryption, SSL/TLS, Cloud
 */

/**
 * Encryption
 */
export class SymmetricEncryption {
	/**
	 * AES, ChaCha20
	 */
}

export class AsymmetricEncryption {
	/**
	 * RSA, ECC, McEliece Cryptosystem
	 */
}

export class FileEncryption extends SymmetricEncryption {}

export class DBEncryption extends SymmetricEncryption {
	/**
	 * Row-level, column-level, DB Backup
	 */
}

export class SSLTLS extends AsymmetricEncryption {}
