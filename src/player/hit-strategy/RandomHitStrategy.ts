import * as _ from 'lodash';

const selectRandomLine = (): number => _.random(0, 10, false);

export const RandomHitStrategy: HitStrategy = {
    decide: () => new Coordinate(
        selectRandomColumn(),
        selectRandomLine(),
    ),
};
