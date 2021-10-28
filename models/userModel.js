import mysql from 'mysql';

//new mysql.Schema

const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
};

//mysql.model
const User = ('User', userSchema);
export default User;
