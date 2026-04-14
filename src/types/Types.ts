export interface Travel {
    id: number;
    route: string;
    image: string;
    description: string;
    price: string;
}

export interface CarouselDest {
    id: number;
    route: string;
    image: string;
}

export interface DealsTravel {
    id: number;
    route: string;
    image: string;
    description: string;
    oldPrice: string;
    newPrice: string;
}