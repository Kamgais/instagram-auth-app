import { SessionDto } from "../dtos/session-dto";
import { Session } from "../models/session-model";

export class SessionMapper {

    static toDto(session: Session): SessionDto {
        return {
            id: session.id,
            valid: session.valid,
            userId: session.userId
        }
    }
}