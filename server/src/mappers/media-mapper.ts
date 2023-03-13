import { MediaDto } from "../dtos/media-dto";
import { Media } from "../models/media-model";


export class MediaMapper {

    static toDto(media: Media): MediaDto {
        return {
            id: media.id,
            mediaName: media.mediaName,
            mediaType: media.mediaType,
            mediaUrl: media.mediaUrl,
            postId: media.postId
        }
    }
}