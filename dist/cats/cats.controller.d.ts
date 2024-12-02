import { CreateCatDto } from 'src/dto/dto';
export declare class CatsController {
    findAll(): string;
    findOne(): string;
    decReq(message: string): string;
    decBody(body: CreateCatDto): string;
}
