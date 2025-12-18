export interface ButtonType {
    buttonClass: string;
    children: React.ReactNode;
    onClick?: () => void;
}