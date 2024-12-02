
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('breed')
    findOne(): string {
        return 'This action returns a #1 cat';
    }

    @Get('dec-params/:message')
    decReq(@Param('message') message: string): string {
        return 'This action returns a #1 cat: ' + message;
    }
}
