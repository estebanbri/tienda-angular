export interface CartItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CatalogItem {
    id: number;
    imageUrl: string;
    name: string;
    vendor: string;
    price: number;
}