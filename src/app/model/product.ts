export class Product {
    id: number;
    title: string;
    rating: number;
    desc: string;
    price: number;

    constructor(id, title, rating, desc, price) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.rating = rating;
        this.price = price;
    }
}