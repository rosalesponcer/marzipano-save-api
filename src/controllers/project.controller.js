
import Project from '../models/Project';

export const getProject = async (req, res) => {
    const { id } = req.params;

    const savedProject = await Project.findById(id).exec();

    res.status(200).json(savedProject);
}

export const saveProject = async (req, res) => {
    const { name, scenes } = req.body;

    const savedProject = await Project.create({ name, scenes })

    res.status(200).json(savedProject);
}
