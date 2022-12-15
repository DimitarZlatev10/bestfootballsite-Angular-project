export interface IUser {
  _id: string;
  username: string;
  email: string;
  balance: number;
  phoneNumber: string;
  wishlist: [];
  transactions: [];
  creditCardInfo: [];
  __v: number;
}
