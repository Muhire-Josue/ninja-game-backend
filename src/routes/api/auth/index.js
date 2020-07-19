import express from 'express';
import facebook from './facebook';

const router = express.Router();

router.use('/facebook', facebook);

export default router;
