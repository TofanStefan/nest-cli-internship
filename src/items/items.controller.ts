import { Controller ,Get  ,Post,Put ,Delete,Body,Param, NotFoundException } from '@nestjs/common';
import {CreateItemDto} from '../dto/create-item.dto'
import {ItemsService} from './items.service'
import {Item} from './interfaces/item.interface'


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService : ItemsService){}

    @Get()
    findAll() : Item[] {
        return this.itemsService.findAll()
    }
    @Post()
    create(@Body()  item : CreateItemDto): Item[]{

        return this.itemsService.create(Number(item.id),item.name)


    }

}
