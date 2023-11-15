export interface Encrypt {
    encrypt(data: any): string;
    decrypt(text: string): string;
}
