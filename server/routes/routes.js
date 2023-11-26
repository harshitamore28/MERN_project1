import express from 'express';
import { getList, getItem, createItem, deleteItem, updateItem } from '../controllers/controllers.js';

const router = express.Router();

router.get('/', getList);
router.get('/:id', getItem);
router.post('/', createItem);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);

export default router;