export interface NavTextWrapperType {
    active: boolean;
    icon: string;
    text: string;
    currentIndex: number;
    pageActive: string;
}

export interface ModalWrapper {
    handleInactive: (val: boolean) => void
}