const products = [
    { id: '12332', name: 'Samsung S6', price: '2000', imageUrl: '1.jpeg', description: 'iyi telefon' },
    { id: '12333',name: 'Samsung S7', price: '3000', imageUrl: '2.jpeg', description: 'iyi telefon' },
    { id: '12334',name: 'Samsung S8', price: '4000', imageUrl: '3.jpeg', description: 'iyi telefon' }];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = (Math.floor(Math.random()*99999)+1).toString();
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

    static getById(id) {
        const product = products.find(i => i.id === id);
        return product;
    }

    static Update(product) {
        const index = products.findIndex(i => i.id === product.id)

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

    static DeleteById(id) {
        const index = products.findIndex(i => i.id === id);
        products.splice(index,1);
    }

}
