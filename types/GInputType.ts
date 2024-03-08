export interface GInputType {
    label: string;
    type: 'text' | 'number' | 'password';
    placeholder: string;
    name: string;
    handler?: (val: any) => void;
    error?: string;
    passwordTypHandler?: (value: boolean) => void;
    inputError?: string;
}

interface OptionType{
    id: string;
    title: string;
}

export interface GSelectType {
    label: string;
    name: string;
    handler?: (val: any) => void;
    error?: string;
    passwordTypHandler?: (value: boolean) => void;
    inputError?: string;
    options: OptionType[];
    optionDefaultText: string;
}