export interface MailSchema {
    from: {
        name: string;
        email: string;
    };
    subject: string;
    body: string;
}