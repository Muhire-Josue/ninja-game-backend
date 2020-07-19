import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello, welcome to our gaming platform!'
}));

export default router;
