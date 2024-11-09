import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller()
export class PrimeController {

    @Get('prime/:number')
    isPrime(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
        const result = this.checkPrime(number);
        return { isPrime: result };
    }

    private checkPrime(num: number): boolean {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
