export class Usuarios {
    constructor(_id='',email='',password=''){
        this._id=_id;
        this.email=email;
        this.password=password;
    }

    _id: String;
    email: String;
    password: String;
}
