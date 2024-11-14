// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum CoreTimeTypes {
  'Reservation',
  'Lease',
  'Bulk Coretime',
  'On Demand'
}

export type PhaseInfo = {
  name: string;
  lastBlock: number;
  lastTimeslice: number
};

export const PhaseName = {
  Renewals: 'Renewals',
  PriceDiscovery: 'Price Discovery',
  FixedPrice: 'Fixed Price'
}