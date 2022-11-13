const Student = require('../model/Student');

const getAllStudents = async (req, res) => {
    const students = await Student.find();
    if (!students) return res.status(204).json({'message': 'No students found'});
    res.json(students);
}

const createNewStudent = async (req, res) => {
    if (!req?.body?.fullname || !req?.body?.student_id || !req?.body?.major) 
        return res.status(404).json({'message': 'First and last names are required'});

    try {
        const result = await Student.create({
            fullname: req.body.fullname,
            student_id: req.body.student_id,
            major: req.body.major
        });

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateStudent = async (req, res) => {
    if (!req?.body?.id) 
        return res.status(400).json({ 'message': 'ID parameter is required.'});
    
    const student = await Student.findOne({ _id: req.body.id }).exec();
    if (!student)
        return res.status(400).json({ "message": `No student matches ID ${req.body.id}.` });
    
    if (req.body?.fullname) student.fullname = req.body.fullname;
    if (req.body?.student_id) student.student_id = req.body.student_id;
    if (req.body?.major) student.major = req.body.major;

    const result = await student.save();

    // res.json(result);
    res.status(200).json(result);
}

const deleteStudent = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Student ID required.'}) ;

    const student = await Student.findOne({ _id: req.body.id }).exec();
    if (!student)
        return res.status(204).json({ "message": `No student matches ID ${req.body.id}.` });

    const result = await student.deleteOne(); // { _id: req.body.id }
    
    res.json(result);
    // res.status(200).json(result);
}

const getStudent = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Student ID required.'}) ;

    const student = await Student.findOne({ _id: req.params.id }).exec();
    if (!student) 
        return res.status(400).json({ "message": `No student matches ID ${req.params.id}.` });

    // res.json(student);
    res.status(200).json(student);
}

module.exports = {
    getAllStudents,
    createNewStudent,
    updateStudent,
    deleteStudent,
    getStudent
}