import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringFilter'
})
export class stringFilter implements PipeTransform {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value: string): string {             // a fx which takes input data as string and return in also string
        return (value.trim().replace(/ /g, '-'));  // replace space with '-' in a string
    } 
}

@Pipe({
    name: 'sortBy'
})
export class SortPipe implements PipeTransform {
    transform(arr: Array<any>, prop: any, reverse: boolean = false): any {
        if (arr === undefined) return

        const m = reverse ? -1 : 1
        return arr.sort((a: any, b: any): number => {
            const x = a[prop]
            const y = b[prop]
            return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m
        })
    }
}