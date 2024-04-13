import express from 'express';
import { Report } from '../models/reportModel.js';

const router = express.Router();

// Route for Save a new Report
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.firstName ||
            !request.body.lastName ||
            !request.body.feedback
        ) {
            return response.status(400).send({
                message: 'Send all required fields: firstName, lastName, studentID, feedback',
            });
        }
        const newReport = {
            firstName: request.body.firstName, 
            lastName: request.body.lastName,
            feedback: request.body.feedback,
        };

        const report = await Report.create(newReport);

        return response.status(201).send(report);
        } catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
        }
});

//Route for Get All Reports from database
router.get('/', async (request, response) => {
    try {
        const reports = await Report.find({});

        return response.status(200).json({
            count: reports.length,
            data: reports
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Get One Report from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const report = await Report.findById(id);

        return response.status(200).json(report);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Update a Report
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.firstName ||
            !request.body.lastName ||
            !request.body.feedback
        ) {
            return response.status(400).send({
                message: 'Send all fields: firstName, lastName, studentID, feedback',
            });
        }

        const { id } = request.params;


        const result = await Report.findByIdAndUpdate(id, request.body); 

        if (!result) {
            return response.status(404).json({ message: 'Report not found' });
        }

        return response.status(200).send({ message: 'Report updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}); 

// Route for Delete a Report
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Report.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Report not found' });
        }

        return response.status(200).send({ message: 'Report deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router; 
