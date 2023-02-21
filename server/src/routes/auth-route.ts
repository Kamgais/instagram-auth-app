import { Router } from "express";
import { AuthController } from "../controllers/auth-controller";
import validate from "../middlewares/validateResource";
import { CreateUserSchema } from "../schemas/user-schema";
import passport from "passport";
import { googleCallBackHandler } from "../controllers/session-controller";
import { UserDto } from "../dtos/user-dto";

const router = Router();

// create an account
router.post('/', validate(CreateUserSchema) , AuthController.createUserHandler);


// confirm email
router.get('/confirm', AuthController.confirmEmailHanler)

// forgot password
router.post('/forgot-password', AuthController.forgotPasswordHandler)


// change password
router.put('/reset-password', AuthController.resetPasswordHandler)


// google-auth // initialize the Google OAuth2.0 authentification
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

// Handle the callback after Google has authenticated the user
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: "http://localhost:5173/login/google",
    failureRedirect: '/login/failed'
}))


// google login fail
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    })
})


// google login success
router.get('/login/success', googleCallBackHandler, (req, res) => {

    if(req.user && res.locals.session) {
        res.status(200).json({
            userId: (req.user as UserDto).id,
            session: res.locals.session.id
        })
    } else {
        res.status(500).json({message: 'fail to login with google'})
    }
    
})












export default router;