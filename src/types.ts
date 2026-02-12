export interface ICategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface ICartProduct extends IProduct {
  quantity:number;
}

export interface IUser {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export interface IAppState {
    cartCount: number,
    wishCount: number,
    cartProducts: ICartProduct[],
    currentUser: null

}