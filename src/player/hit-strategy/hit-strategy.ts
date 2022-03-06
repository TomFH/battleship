import { Coordinate } from '../../grid/coordinate';
import { OpponentGrid } from '../../standard-grid/opponent-grid';

export type HitDecider<
    ColumnIndex extends PropertyKey,
    RowIndex extends PropertyKey,
> = (grid: OpponentGrid) => Coordinate<ColumnIndex, RowIndex>;

export interface HitStrategy<
    ColumnIndex extends PropertyKey,
    RowIndex extends PropertyKey,
> {
    decide: HitDecider<ColumnIndex, RowIndex>;
}
