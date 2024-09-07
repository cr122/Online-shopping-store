import { UserModel, mongooseConnect } from '../../lib/dbUtils';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { username, password } = req.body;
  const { method } = req;

  await mongooseConnect();

  switch (method) {
    case 'POST':
      try {
        const user = await UserModel.findOne({ username });
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
