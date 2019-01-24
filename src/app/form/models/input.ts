import { Evento } from './evento';

export class Input {
    public id: string;
    public label: string;
    public name: string;
    public type: string = 'text';
    public cssWrapper?: string;
    public cssClass?: string;
    public eventos?: Array<Evento> = [];
}