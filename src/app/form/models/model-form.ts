import { Input } from './input';
import { Submit } from './submit';

export class modelForm {
    public inputs: Array<Input> = [];
    public resetForm: boolean = false;
    public submit: Submit = new Submit;
    public model: any;
}