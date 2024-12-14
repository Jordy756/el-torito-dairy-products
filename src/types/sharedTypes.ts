export type ErrorTypes = {
    valueMissing?: string;
    tooShort?: string;
    patternMismatch?: string;
};

export type APIResponseType = {
    success: boolean;
    message: string;
};