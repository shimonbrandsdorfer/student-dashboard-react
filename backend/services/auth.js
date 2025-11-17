import knexClient from "./db.js"
import bcrypt from 'bcryptjs';

export const createUser = async (user) => {

    const hash = await bcrypt.hash(user.password, 10);

    const newUser = await knexClient('users').insert({
        username : user.username,
        password : hash,
        role : 'student'
    }).returning('*');

    return newUser;
}

export const getAll = async () => {
    const users = await knexClient('users').select('*');
    return users;
}

export const findUserByUserName = async (username) => {
    const user = await knexClient('users')
    .where({
        username
    }).first();
    return user;
}

export const matchPasswords = async(password, hash) => {
    return bcrypt.compare(password, hash);
}