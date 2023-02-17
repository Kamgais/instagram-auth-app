import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { findSessionById } from '../services/session-service';
import { findUserById } from '../services/user-service';


export function signJwt(object: Object, options?:jwt.SignOptions | undefined) {
     return jwt.sign(object, process.env.JWT_PRIVATE_KEY as Secret, {
        ...(options && options)
    })
}

export function verifyJwt(token: string) {
    try {
        const decoded: string | JwtPayload = jwt.verify(token, process.env.JWT_PUBLIC_KEY!);
        return {
            valid: true,
            expired: false,
            decoded: decoded
        }
    } catch (error: any) {
       return {
        valid: false,
        expired: error.message === 'jwt expired',
        decoded: null
       } 
    }
}


export async function reIssueTokens(token: string) {
    const {decoded, expired} = verifyJwt(token);
    if(!decoded) return false;
    const {session, userId} = decoded as JwtPayload;
    const user = await findUserById(userId);
    if(!user) return false;
    const sessionFromDB = await findSessionById(session);
    if(!session) return false;

    const newAccessToken = signJwt({
        userId: user.id,
        session: session.id
    }, {
        expiresIn: '15m'
    })

    const newRefreshToken = signJwt({
        userId: user.id,
        session: session.id
    }, {
        expiresIn: '1y'
    })


    return {newAccessToken, newRefreshToken}
}