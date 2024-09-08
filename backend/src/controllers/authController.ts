import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserFactory from '../models/User';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'default_db_name',
  process.env.DB_USER || 'default_db_user',
  process.env.DB_PASSWORD || 'default_db_password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10)
  }
);

const User = UserFactory(sequelize);

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });
  res.status(201).send('User registered');
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  const jwtKey = process.env.JWT_KEY;
  if (!jwtKey) {
    throw new Error('JWT_KEY is not defined');
  }

  const token = jwt.sign({ id: user.id }, jwtKey);
  res.json({ token });
};