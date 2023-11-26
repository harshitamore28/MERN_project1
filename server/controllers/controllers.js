import Model from '../models/model.js';
export const getList = async (req, res) => {
    const list = await Model.find({}).sort({ createdAt: -1 });
    res.status(200).json(list);
}
export const getItem = async (req, res) => {
    const { id } = req.params;
    const item = await Model.findById(id);
    res.status(200).json(item);
}
export const createItem = async (req, res) => {
    const { title, description } = req.body;
    const item = await Model.create({ title, description });
    res.status(200).json(item);
}
export const deleteItem = async (req, res) => {
    const { id } = req.params;
    const item = await Model.findOneAndDelete({ _id: id });
    res.status(200).json(item);
}
export const updateItem = async (req, res) => {
    const { id } = req.params;
    const item = await Model.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(item);
}