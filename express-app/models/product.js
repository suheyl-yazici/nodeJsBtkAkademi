const products = [
    { id: '12332', name: 'Samsung S6', price: '2000', imageUrl: '1.jpeg', description: 'iyi telefon' },
    { id: '12333',name: 'Samsung S7', price: '3000', imageUrl: '2.jpeg', description: 'iyi telefon' },
    { id: '12334',name: 'Samsung S8', price: '4000', imageUrl: '3.jpeg', description: 'iyi telefon' }];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = Math.floor(Math.random()*99999)+1;
        this.name = name,
        this.price = price,
        this.imageUrl = imageUrl,
        this.description = description
    }

    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }

}

// const products = Product.getAll();

// const p = new Product('Samsung', 2000, '1.jpeg', 'iyi telefon');
// p.saveProduct();
