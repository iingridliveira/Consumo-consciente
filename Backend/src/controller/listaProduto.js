import { Product } from "../model/Product.js";
var Products = []
function listaProducts(nome, tipo, potencia, tempo, dias,taxa){
 var novoProduct = new Product(nome, tipo, potencia, tempo, dias,taxa)
 Products.push(novoProduct)
 return novoProduct;
}
function getProduct() {
    return Products;
}

function atualizarProductsconsumo(nome) {
  let Product = Products.find(Product => Product.nome ===  nome)
  if(Product){
     let ProductIndex = Products.findIndex(Product => Product.nome == nome);
     Products[ProductIndex].consumo =
     Products[ProductIndex].consumo =
     (Products[ProductIndex].potencia *
     (Products[ProductIndex].tempo*
      Products[ProductIndex].dias))/1000
     console.log(`Product consumindo ${Products[ProductIndex].consumo} kWh`);
    return Products[ProductIndex];
  }else{
     return "olha Product nao encontrado"
  }
}
function getProductconsumo() {
    let ProductsAtualizadosconsumo = [];

    for (let i = 0; i < Products.length; i++) {
        if (Products[i].consumo === 0) {
            return "Olha, o consumo do Product não foi atualizado";
        } else {
            ProductsAtualizadosconsumo.push(Products[i]);
        }
    }

    return ProductsAtualizadosconsumo;
}

function atualizarProductstaxa(nome) {
    let Product = Products.find(Product => Product.nome ===  nome)
    if(Product){
    let ProductIndex = Products.findIndex(Product => Product.nome == nome);
     Products[ProductIndex].gasto = Products[ProductIndex].gasto =
     Products[ProductIndex].consumo * Products[ProductIndex].taxa
     console.log(`Product gastou R$ ${Products[ProductIndex].gasto},00 a uma taxa
     R$${Products[ProductIndex].taxa}`);
      return Products[ProductIndex];
    }else{
       return "olha Product não encontrado"
    }
  }
function apagaProducts(nome) {
   let ProductApagarIndex = Products.findIndex(Product => Product.nome === nome);
    if (ProductApagarIndex !== -1) { 
     if (Products[ProductApagarIndex].consumo >= 300) {
       console.log("Product atingiu consumo >= 300 kWh");
       const ProductRemovido = Products.splice(ProductApagarIndex, 1)[0];
       return ProductRemovido;
       } else {
           console.log("Product não atingiu consumo >= 300 kWh");
           return "Product não atingiu 300kw/h.";
       }
    } else {
       console.log("Product não encontrado");
       return "Product não encontrado.";
   }
}
function getProductgasto() {
    let ProductsAtualizadosgasto = [];

    for (let i = 0; i < Products.length; i++) {
        if (Products[i].gasto === 0) {
            return "Olha, o gasto do Product não foi atualizado";
        } else {
            ProductsAtualizadosgasto.push(Products[i]);
        }
    }

    return ProductsAtualizadosgasto;
}
export {listaProducts,
        getProduct,
        getProductconsumo,
        getProductgasto,
        atualizarProductsconsumo,
        atualizarProductstaxa,
        apagaProducts}