/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly NODEMAILER_PW: string;
    readonly NODEMAILER_EMAIL: string;
    readonly NODEMAILER_SENDER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}