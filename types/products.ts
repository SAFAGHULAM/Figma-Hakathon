

export interface Product {
    _id : string;
    name : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : string;
    description? : string;
    slug : {
        _type: "slug"
        current: string;
    };
    inventory: number;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: "Category";
}