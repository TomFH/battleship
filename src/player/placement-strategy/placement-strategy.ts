import { Grid } from '../../grid/grid';
import { Fleet } from '../../ship/fleet';

export type FleetPlacer = (grid: Grid, fleet: Fleet) => void;

export interface PlacementStrategy {
    place: FleetPlacer;
}
