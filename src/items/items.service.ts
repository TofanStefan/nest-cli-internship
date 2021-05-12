import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items : Item[] = [
    {
        id : 32,
        name : "Item 1"
    },
    {
        id : 33,
        name : "Item 2"
    }
    

];
    findAll() : Item[] {
        return this.items
    }
    create(id : number, name :string){
        this.items.push({
            id,
            name
        })
        return this.items
    }

}
