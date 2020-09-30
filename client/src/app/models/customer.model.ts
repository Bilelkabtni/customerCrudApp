import {Name} from "@interfaces/name.interface";

type Gender = 'm' | 'f';

export class Customer {
  public _id: string;
  public name: Name;
  public birthday: string;
  public gender: Gender;
  public lastContact: string;
  public customerLifetimeValue: number;

  constructor(data: any = {}) {
    const {
      _id = null,
      name = {
        first: null,
        last: null
      },
      birthday = null,
      gender = null,
      lastContact = null,
      customerLifetimeValue = null
    } = data;

    this._id = _id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.lastContact = lastContact;
    this.customerLifetimeValue = customerLifetimeValue;
  }
}
