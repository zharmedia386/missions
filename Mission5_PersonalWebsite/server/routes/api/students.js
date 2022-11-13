const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(studentsController.getAllStudents)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), studentsController.createNewStudent)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), studentsController.updateStudent)
    .delete(verifyRoles(ROLES_LIST.Admin), studentsController.deleteStudent);

router.route('/:id')
    .get(studentsController.getStudent);

module.exports = router;