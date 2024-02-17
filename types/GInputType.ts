export interface GInputType {
    label: string;
    type: 'text' | 'number';
    placeholer: string;
    name: string;
    handler?: (val: any) => void;
    error?: string;
}
