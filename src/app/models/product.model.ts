export interface Category {
  id: string
  name: string
}
export interface Product {
  id: string
  title: string
  images: string[]
  price: number
  description: string
  category: Category
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}


export const DefaultProduct: Product = {
  id: '',
  title: '',
  images: [],
  price: 0,
  description: '',
  category: {
    id: '0',
    name: 'category'
  }
}