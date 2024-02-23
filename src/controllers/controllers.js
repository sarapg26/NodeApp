import {pool} from '../db.js';

export const home = (req,res) => res.render('home',{title:'home'});

export const login = (req,res) => res.render('login', {title:'login'});

export const registro = (req,res) => res.render('registro', {title:'registro'})

export const insertuser = async (req,res) => {
    const {nameuser, password} = req.body
    const [rows] = await pool.query('insert into users(nameuser, password) values(?,?)',[nameuser,password]);
    res.send(({
        id: rows.id,
        name: rows.nameuser,
        message: "Usuario Creado",
        password: rows.password
        
    })) 
    
}
export const showusers = async (req,res) => {
    const result = await pool.query('select * from users')
    res.json(result[0])
}