
import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/dto';

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

    @Post('dec-body')
    decBody(@Body() body: CreateCatDto): string {
        return `Your body key: ${body.key}, name: ${body.name}, age: ${body.age}`;
    }
}
