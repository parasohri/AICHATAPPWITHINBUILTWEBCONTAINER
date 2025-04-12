import express, { Router } from 'express'
import morgan from 'morgan'
import * as authMiddleware from '../middleware/auth.middleware.js'
import * as usercontroller from'../Controllers/user.controller.js'
import { body } from 'express-validator'
const router =Router();
router.post('/register',body('email').isEmail().withMessage('Email must be valid email address'),
body('password').isLength({min:3}).withMessage('password must be at least 3 word'),usercontroller.createUserController


);
router.post('/login',usercontroller.signin);
router.get('/logout', authMiddleware.authUser,usercontroller.logout);
router.get('/profile', authMiddleware.authUser, usercontroller.profileController);
router.get('/all',authMiddleware.authUser,usercontroller.getAllUsersController);
router.get('/get',authMiddleware.authUser,usercontroller.getuser)
export default router;