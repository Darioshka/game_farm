export enum GardenState {
  Empty,
  Busy,
  Block,
}

export class GardenCell {
  public state: GardenState;

  constructor() {
    this.state = GardenState.Empty;
  }

  setHarvest() {}
  getHarvest() {}

  public stateToString() {
    const labels: Record<GardenState, string> = {
      [GardenState.Empty]: "не засажена",
      [GardenState.Busy]: "занята",
      [GardenState.Block]: "грядка заблокирована",
    };

    return labels[this.state];
  }
}
