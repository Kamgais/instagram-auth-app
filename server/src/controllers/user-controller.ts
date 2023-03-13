import { Request, Response} from "express";
import { UserMapper } from "../mappers/user-mapper";
import { findUserById } from "../services/user-service";


export class UserController {

    static async getUser(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        try {
          const userFromDB = await findUserById(+id);
           const userDto = UserMapper.toDto(userFromDB!)
          return res.status(200).json(userDto)

        } catch (error: any) {
         return res.status(500).json({message: error.message})   
        }
    }
}