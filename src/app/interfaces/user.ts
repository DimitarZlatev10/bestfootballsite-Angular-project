export interface IUser {
  _id: string;
  username: string;
  email: string;
  balance: number;
  wishlist: [];
  transactions: [];
  creditCardInfo: [];
  __v: number;
}
