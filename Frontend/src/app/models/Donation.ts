export class Donation{
  public firstName:string;
  public lastName:string;
  public email: string;
  public donationAmount:string;
  constructor(firstName:string,lastName:string,email:string,donationAmount:string)
  {
      this.firstName=firstName;
      this.lastName=lastName;
      this.email=email;
      this.donationAmount=donationAmount;
  }
}
