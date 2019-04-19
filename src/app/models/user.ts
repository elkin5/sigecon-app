export class User {

  constructor(_id = '', email = '', fullname = '', username = '', password = ''){
    this._id = _id;
    this.email = email;
    this.fullname = fullname;
    this.username = username;
    this.password = password;
  };

  _id: string;
  email: string;
  fullname: string;
  username: string;
  password: string; 
}
