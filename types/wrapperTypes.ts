export interface NavTextWrapperType {
    active: boolean;
    icon: string;
    text: string;
    currentIndex: number;
    pageActive: string;
}

export interface ModalWrapperType {
    handleInactive: (val: boolean) => void
}