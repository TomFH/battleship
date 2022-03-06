import * as _ from 'lodash';

export class AdaptablePlayer {
    private readonly grid: Grid;

    private readonly opponentGrid = new OpponentGrid();

    private lastMove: Coordinate | undefined;

    constructor(
        public readonly name: string,
        grid: Grid,
        fleet: Fleet,
        placementStrategy: PlacementStrategy,
        private readonly hitStrategy: HitStrategy,
    ) {
        const playerGrid = _.cloneDeep(grid);

        this.grid = playerGrid;
        placementStrategy.place(playerGrid, fleet);
    }

    askMove(): Coordinate {
        const nextMove = this.hitStrategy.decide(this.opponentGrid);

        this.lastMove = nextMove;

        return nextMove;
    }

    sendResponse(response: ShotResponse): ShotAcknowledgement {
        const { lastMove } = this;
        assertNotUndefined(lastMove);

        switch (response) {
            case ShotResponse.MISS:
                this.opponentGrid.markAsMissed(lastMove);
                break;

            case ShotResponse.HIT:
                this.opponentGrid.markAsHit(lastMove);
                break;

            case ShotResponse.SUNK:
                this.opponentGrid.markAsSunk(lastMove);
                break;

            case ShotResponse.WON:
                break;

            case ShotResponse.ERROR:
                return ShotAcknowledgement.ERROR;
        }

        return ShotAcknowledgement.OK;
    }

    askResponse(coordinates: Coordinate): ShotResponse {
        return this.grid.recordHit(coordinates);
    }
}

export function createDumbPlayer(name: string, grid: Grid, fleet: Fleet): Player {
    return new AdaptablePlayer(
        `DumbPlayer ${name}`.trim(),
        grid,
        fleet,
        RandomPlacementStrategy,
        RandomHitStrategy,
    );
}
