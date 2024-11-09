import { Controller, Get, Param, BadRequestException } from '@nestjs/common';

@Controller()
export class FactorialController {

    @Get('factorial/:number')
    getFactorial(@Param('number') number: string): { factorial: number } {
        const num = parseInt(number, 10);

        if (isNaN(num) || num < 0) {
            throw new BadRequestException('Please provide a non-negative integer');
        }
        
        const factorial = this.calculateFactorial(num);
        return { factorial };
    }

    private calculateFactorial(num: number): number {
        if (num === 0 || num === 1) return 1;
        return num * this.calculateFactorial(num - 1);
    }
}
