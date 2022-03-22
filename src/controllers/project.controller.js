
import Project from '../models/Project';

export const getAllProjects = async (req, res) => {
    try {
        const findedProject = await Project.find({}).exec();

        res.status(200).json(findedProject);

    } catch (error) {
        res.status(400).json(error);
    }
}

export const getProject = async (req, res) => {

    try {
        const { id } = req.params;

        const savedProject = await Project.findById(id).exec();

        res.status(200).json(savedProject);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const saveProject = async (req, res) => {

    try {
        const { name, scenes } = req.body;

        const savedProject = await Project.create({ name, scenes });

        res.status(200).json(savedProject);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const updateProject = async (req, res) => {

    try {
        const { scenes, name } = req.body;
        console.log({ scenes, name });
        const savedProject = await Project.findByIdAndUpdate(req.params?.id, { scenes, name });
        console.log(savedProject);
        res.status(200).json(savedProject);
    } catch (error) {
        res.status(400).json(error);
    }
}
