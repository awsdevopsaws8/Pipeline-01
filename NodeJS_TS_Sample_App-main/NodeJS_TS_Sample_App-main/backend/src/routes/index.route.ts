import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('Hemanth Backend server is running');
});

export default router;
