
const {check} = require("express-validator");
const {validateResult} = require("../helpers/validateResult");

const validateServiceType = [

        check('typeservice')
            .exists()
            .not()
            .isEmpty(),
        
        (req, res, next) =>{
            validateResult(req, res, next);
        }

];

module.exports = { validateServiceType }