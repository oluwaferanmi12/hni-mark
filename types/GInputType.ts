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

type OptionType{
    value: string;
    selectLabel: string;
}

export interface GSelectType {
    label: string;
    type: 'text' | 'number' | 'password';
    placeholder: string;
    name: string;
    handler?: (val: any) => void;
    error?: string;
    passwordTypHandler?: (value: boolean) => void;
    inputError?: string;
    options: OptionType[]
}