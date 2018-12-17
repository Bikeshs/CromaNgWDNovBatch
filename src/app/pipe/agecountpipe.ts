import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'ageCount'
})
export class AgeCountPipe implements PipeTransform {
    transform(birthdate: any) {
        birthdate = new Date(birthdate);
        var timeDiff = Math.abs(Date.now() - birthdate);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }

}