export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
}



export interface Block_Height {
  readonly hash?: Maybe<Scalars['Bytes']>;
  readonly number?: Maybe<Scalars['Int']>;
  readonly number_gte?: Maybe<Scalars['Int']>;
}

export interface Bundle {
  readonly __typename?: 'Bundle';
  readonly id: Scalars['ID'];
  readonly ethPrice: Scalars['BigDecimal'];
}

export interface Bundle_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly ethPrice?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_not?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_gt?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_lt?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_gte?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_lte?: Maybe<Scalars['BigDecimal']>;
  readonly ethPrice_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly ethPrice_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Bundle_OrderBy {
  Id = 'id',
  EthPrice = 'ethPrice'
}

export interface Burn {
  readonly __typename?: 'Burn';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly liquidity: Scalars['BigDecimal'];
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly needsComplete: Scalars['Boolean'];
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
}

export interface Burn_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly liquidity?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly needsComplete?: Maybe<Scalars['Boolean']>;
  readonly needsComplete_not?: Maybe<Scalars['Boolean']>;
  readonly needsComplete_in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly needsComplete_not_in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not?: Maybe<Scalars['Bytes']>;
  readonly feeTo_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Burn_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  NeedsComplete = 'needsComplete',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}


export interface LiquidityPosition {
  readonly __typename?: 'LiquidityPosition';
  readonly id: Scalars['ID'];
  readonly user: User;
  readonly pair: Pair;
  readonly liquidityTokenBalance: Scalars['BigDecimal'];
}

export interface LiquidityPositionSnapshot {
  readonly __typename?: 'LiquidityPositionSnapshot';
  readonly id: Scalars['ID'];
  readonly liquidityPosition: LiquidityPosition;
  readonly timestamp: Scalars['Int'];
  readonly block: Scalars['Int'];
  readonly user: User;
  readonly pair: Pair;
  readonly token0PriceUSD: Scalars['BigDecimal'];
  readonly token1PriceUSD: Scalars['BigDecimal'];
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly liquidityTokenTotalSupply: Scalars['BigDecimal'];
  readonly liquidityTokenBalance: Scalars['BigDecimal'];
}

export interface LiquidityPositionSnapshot_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidityPosition?: Maybe<Scalars['String']>;
  readonly liquidityPosition_not?: Maybe<Scalars['String']>;
  readonly liquidityPosition_gt?: Maybe<Scalars['String']>;
  readonly liquidityPosition_lt?: Maybe<Scalars['String']>;
  readonly liquidityPosition_gte?: Maybe<Scalars['String']>;
  readonly liquidityPosition_lte?: Maybe<Scalars['String']>;
  readonly liquidityPosition_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly liquidityPosition_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly liquidityPosition_contains?: Maybe<Scalars['String']>;
  readonly liquidityPosition_not_contains?: Maybe<Scalars['String']>;
  readonly liquidityPosition_starts_with?: Maybe<Scalars['String']>;
  readonly liquidityPosition_not_starts_with?: Maybe<Scalars['String']>;
  readonly liquidityPosition_ends_with?: Maybe<Scalars['String']>;
  readonly liquidityPosition_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['Int']>;
  readonly timestamp_not?: Maybe<Scalars['Int']>;
  readonly timestamp_gt?: Maybe<Scalars['Int']>;
  readonly timestamp_lt?: Maybe<Scalars['Int']>;
  readonly timestamp_gte?: Maybe<Scalars['Int']>;
  readonly timestamp_lte?: Maybe<Scalars['Int']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly block?: Maybe<Scalars['Int']>;
  readonly block_not?: Maybe<Scalars['Int']>;
  readonly block_gt?: Maybe<Scalars['Int']>;
  readonly block_lt?: Maybe<Scalars['Int']>;
  readonly block_gte?: Maybe<Scalars['Int']>;
  readonly block_lte?: Maybe<Scalars['Int']>;
  readonly block_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly block_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly user?: Maybe<Scalars['String']>;
  readonly user_not?: Maybe<Scalars['String']>;
  readonly user_gt?: Maybe<Scalars['String']>;
  readonly user_lt?: Maybe<Scalars['String']>;
  readonly user_gte?: Maybe<Scalars['String']>;
  readonly user_lte?: Maybe<Scalars['String']>;
  readonly user_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly user_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly user_contains?: Maybe<Scalars['String']>;
  readonly user_not_contains?: Maybe<Scalars['String']>;
  readonly user_starts_with?: Maybe<Scalars['String']>;
  readonly user_not_starts_with?: Maybe<Scalars['String']>;
  readonly user_ends_with?: Maybe<Scalars['String']>;
  readonly user_not_ends_with?: Maybe<Scalars['String']>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly token0PriceUSD?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0PriceUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1PriceUSD?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1PriceUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenTotalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenTotalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenBalance_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum LiquidityPositionSnapshot_OrderBy {
  Id = 'id',
  LiquidityPosition = 'liquidityPosition',
  Timestamp = 'timestamp',
  Block = 'block',
  User = 'user',
  Pair = 'pair',
  Token0PriceUsd = 'token0PriceUSD',
  Token1PriceUsd = 'token1PriceUSD',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  LiquidityTokenTotalSupply = 'liquidityTokenTotalSupply',
  LiquidityTokenBalance = 'liquidityTokenBalance'
}

export interface LiquidityPosition_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly user?: Maybe<Scalars['String']>;
  readonly user_not?: Maybe<Scalars['String']>;
  readonly user_gt?: Maybe<Scalars['String']>;
  readonly user_lt?: Maybe<Scalars['String']>;
  readonly user_gte?: Maybe<Scalars['String']>;
  readonly user_lte?: Maybe<Scalars['String']>;
  readonly user_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly user_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly user_contains?: Maybe<Scalars['String']>;
  readonly user_not_contains?: Maybe<Scalars['String']>;
  readonly user_starts_with?: Maybe<Scalars['String']>;
  readonly user_not_starts_with?: Maybe<Scalars['String']>;
  readonly user_ends_with?: Maybe<Scalars['String']>;
  readonly user_not_ends_with?: Maybe<Scalars['String']>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly liquidityTokenBalance?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenBalance_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum LiquidityPosition_OrderBy {
  Id = 'id',
  User = 'user',
  Pair = 'pair',
  LiquidityTokenBalance = 'liquidityTokenBalance'
}

export interface Mint {
  readonly __typename?: 'Mint';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly to: Scalars['Bytes'];
  readonly liquidity: Scalars['BigDecimal'];
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
}

export interface Mint_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly liquidity?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not?: Maybe<Scalars['Bytes']>;
  readonly feeTo_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Mint_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  To = 'to',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export interface Pair {
  readonly __typename?: 'Pair';
  readonly id: Scalars['ID'];
  readonly token0: Token;
  readonly token1: Token;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly reserveETH: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly trackedReserveETH: Scalars['BigDecimal'];
  readonly token0Price: Scalars['BigDecimal'];
  readonly token1Price: Scalars['BigDecimal'];
  readonly volumeToken0: Scalars['BigDecimal'];
  readonly volumeToken1: Scalars['BigDecimal'];
  readonly volumeUSD: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
  readonly createdAtTimestamp: Scalars['BigInt'];
  readonly createdAtBlockNumber: Scalars['BigInt'];
  readonly liquidityProviderCount: Scalars['BigInt'];
  readonly pairHourData: ReadonlyArray<PairHourData>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swaps: ReadonlyArray<Swap>;
}


export interface PairPairHourDataArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
}


export interface PairLiquidityPositionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
}


export interface PairLiquidityPositionSnapshotsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
}


export interface PairMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
}


export interface PairBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
}


export interface PairSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
}

export interface PairDayData {
  readonly __typename?: 'PairDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly pairAddress: Scalars['Bytes'];
  readonly token0: Token;
  readonly token1: Token;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly dailyVolumeToken0: Scalars['BigDecimal'];
  readonly dailyVolumeToken1: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyTxns: Scalars['BigInt'];
}

export interface PairDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pairAddress?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_not?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly pairAddress_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly pairAddress_contains?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_not_contains?: Maybe<Scalars['Bytes']>;
  readonly token0?: Maybe<Scalars['String']>;
  readonly token0_not?: Maybe<Scalars['String']>;
  readonly token0_gt?: Maybe<Scalars['String']>;
  readonly token0_lt?: Maybe<Scalars['String']>;
  readonly token0_gte?: Maybe<Scalars['String']>;
  readonly token0_lte?: Maybe<Scalars['String']>;
  readonly token0_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_contains?: Maybe<Scalars['String']>;
  readonly token0_not_contains?: Maybe<Scalars['String']>;
  readonly token0_starts_with?: Maybe<Scalars['String']>;
  readonly token0_not_starts_with?: Maybe<Scalars['String']>;
  readonly token0_ends_with?: Maybe<Scalars['String']>;
  readonly token0_not_ends_with?: Maybe<Scalars['String']>;
  readonly token1?: Maybe<Scalars['String']>;
  readonly token1_not?: Maybe<Scalars['String']>;
  readonly token1_gt?: Maybe<Scalars['String']>;
  readonly token1_lt?: Maybe<Scalars['String']>;
  readonly token1_gte?: Maybe<Scalars['String']>;
  readonly token1_lte?: Maybe<Scalars['String']>;
  readonly token1_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_contains?: Maybe<Scalars['String']>;
  readonly token1_not_contains?: Maybe<Scalars['String']>;
  readonly token1_starts_with?: Maybe<Scalars['String']>;
  readonly token1_not_starts_with?: Maybe<Scalars['String']>;
  readonly token1_ends_with?: Maybe<Scalars['String']>;
  readonly token1_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyTxns?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum PairDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  PairAddress = 'pairAddress',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveUsd = 'reserveUSD',
  DailyVolumeToken0 = 'dailyVolumeToken0',
  DailyVolumeToken1 = 'dailyVolumeToken1',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns'
}

export interface PairHourData {
  readonly __typename?: 'PairHourData';
  readonly id: Scalars['ID'];
  readonly hourStartUnix: Scalars['Int'];
  readonly pair: Pair;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly hourlyVolumeToken0: Scalars['BigDecimal'];
  readonly hourlyVolumeToken1: Scalars['BigDecimal'];
  readonly hourlyVolumeUSD: Scalars['BigDecimal'];
  readonly hourlyTxns: Scalars['BigInt'];
}

export interface PairHourData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly hourStartUnix?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_not?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_gt?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_lt?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_gte?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_lte?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly hourStartUnix_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyTxns?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly hourlyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum PairHourData_OrderBy {
  Id = 'id',
  HourStartUnix = 'hourStartUnix',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  HourlyVolumeToken0 = 'hourlyVolumeToken0',
  HourlyVolumeToken1 = 'hourlyVolumeToken1',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  HourlyTxns = 'hourlyTxns'
}

export interface Pair_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly token0?: Maybe<Scalars['String']>;
  readonly token0_not?: Maybe<Scalars['String']>;
  readonly token0_gt?: Maybe<Scalars['String']>;
  readonly token0_lt?: Maybe<Scalars['String']>;
  readonly token0_gte?: Maybe<Scalars['String']>;
  readonly token0_lte?: Maybe<Scalars['String']>;
  readonly token0_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_contains?: Maybe<Scalars['String']>;
  readonly token0_not_contains?: Maybe<Scalars['String']>;
  readonly token0_starts_with?: Maybe<Scalars['String']>;
  readonly token0_not_starts_with?: Maybe<Scalars['String']>;
  readonly token0_ends_with?: Maybe<Scalars['String']>;
  readonly token0_not_ends_with?: Maybe<Scalars['String']>;
  readonly token1?: Maybe<Scalars['String']>;
  readonly token1_not?: Maybe<Scalars['String']>;
  readonly token1_gt?: Maybe<Scalars['String']>;
  readonly token1_lt?: Maybe<Scalars['String']>;
  readonly token1_gte?: Maybe<Scalars['String']>;
  readonly token1_lte?: Maybe<Scalars['String']>;
  readonly token1_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_contains?: Maybe<Scalars['String']>;
  readonly token1_not_contains?: Maybe<Scalars['String']>;
  readonly token1_starts_with?: Maybe<Scalars['String']>;
  readonly token1_not_starts_with?: Maybe<Scalars['String']>;
  readonly token1_ends_with?: Maybe<Scalars['String']>;
  readonly token1_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveETH?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveETH?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0Price?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_not?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0Price_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1Price?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_not?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1Price_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: Maybe<Scalars['BigInt']>;
  readonly txCount_not?: Maybe<Scalars['BigInt']>;
  readonly txCount_gt?: Maybe<Scalars['BigInt']>;
  readonly txCount_lt?: Maybe<Scalars['BigInt']>;
  readonly txCount_gte?: Maybe<Scalars['BigInt']>;
  readonly txCount_lte?: Maybe<Scalars['BigInt']>;
  readonly txCount_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtTimestamp?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_not?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtTimestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtBlockNumber?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_not?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_gt?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_lt?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_gte?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_lte?: Maybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtBlockNumber_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly liquidityProviderCount?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_not?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_gt?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_lt?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_gte?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_lte?: Maybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly liquidityProviderCount_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum Pair_OrderBy {
  Id = 'id',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveEth = 'reserveETH',
  ReserveUsd = 'reserveUSD',
  TrackedReserveEth = 'trackedReserveETH',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  CreatedAtTimestamp = 'createdAtTimestamp',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  LiquidityProviderCount = 'liquidityProviderCount',
  PairHourData = 'pairHourData',
  LiquidityPositions = 'liquidityPositions',
  LiquidityPositionSnapshots = 'liquidityPositionSnapshots',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export interface Query {
  readonly __typename?: 'Query';
  readonly uniswapFactory?: Maybe<UniswapFactory>;
  readonly uniswapFactories: ReadonlyArray<UniswapFactory>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly pair?: Maybe<Pair>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
  readonly liquidityPosition?: Maybe<LiquidityPosition>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly uniswapDayData?: Maybe<UniswapDayData>;
  readonly uniswapDayDatas: ReadonlyArray<UniswapDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
}


export interface QueryUniswapFactoryArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryUniswapFactoriesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapFactory_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTokenArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTokensArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryUserArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryUsersArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryLiquidityPositionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryLiquidityPositionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryLiquidityPositionSnapshotArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryLiquidityPositionSnapshotsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTransactionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTransactionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryMintArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryBurnArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QuerySwapArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QuerySwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryBundleArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryBundlesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryUniswapDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryUniswapDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairHourDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairHourDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryPairDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTokenDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface QueryTokenDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface Query_MetaArgs {
  block?: Maybe<Block_Height>;
}

export interface Subscription {
  readonly __typename?: 'Subscription';
  readonly uniswapFactory?: Maybe<UniswapFactory>;
  readonly uniswapFactories: ReadonlyArray<UniswapFactory>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly pair?: Maybe<Pair>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
  readonly liquidityPosition?: Maybe<LiquidityPosition>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly uniswapDayData?: Maybe<UniswapDayData>;
  readonly uniswapDayDatas: ReadonlyArray<UniswapDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
}


export interface SubscriptionUniswapFactoryArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionUniswapFactoriesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapFactory_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTokenArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTokensArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionUserArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionUsersArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionLiquidityPositionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionLiquidityPositionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionLiquidityPositionSnapshotArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionLiquidityPositionSnapshotsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPositionSnapshot_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTransactionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTransactionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionMintArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionBurnArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionSwapArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionBundleArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionBundlesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionUniswapDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionUniswapDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UniswapDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UniswapDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairHourDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairHourDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionPairDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTokenDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface SubscriptionTokenDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}


export interface Subscription_MetaArgs {
  block?: Maybe<Block_Height>;
}

export interface Swap {
  readonly __typename?: 'Swap';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly sender: Scalars['Bytes'];
  readonly from: Scalars['Bytes'];
  readonly amount0In: Scalars['BigDecimal'];
  readonly amount1In: Scalars['BigDecimal'];
  readonly amount0Out: Scalars['BigDecimal'];
  readonly amount1Out: Scalars['BigDecimal'];
  readonly to: Scalars['Bytes'];
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD: Scalars['BigDecimal'];
}

export interface Swap_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly from?: Maybe<Scalars['Bytes']>;
  readonly from_not?: Maybe<Scalars['Bytes']>;
  readonly from_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_contains?: Maybe<Scalars['Bytes']>;
  readonly from_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0In?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0In_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Swap_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Sender = 'sender',
  From = 'from',
  Amount0In = 'amount0In',
  Amount1In = 'amount1In',
  Amount0Out = 'amount0Out',
  Amount1Out = 'amount1Out',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD'
}

export interface Token {
  readonly __typename?: 'Token';
  readonly id: Scalars['ID'];
  readonly symbol: Scalars['String'];
  readonly name: Scalars['String'];
  readonly decimals: Scalars['BigInt'];
  readonly totalSupply: Scalars['BigInt'];
  readonly tradeVolume: Scalars['BigDecimal'];
  readonly tradeVolumeUSD: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
  readonly totalLiquidity: Scalars['BigDecimal'];
  readonly derivedETH?: Maybe<Scalars['BigDecimal']>;
  readonly tokenDayData: ReadonlyArray<TokenDayData>;
  readonly pairDayDataBase: ReadonlyArray<PairDayData>;
  readonly pairDayDataQuote: ReadonlyArray<PairDayData>;
  readonly pairBase: ReadonlyArray<Pair>;
  readonly pairQuote: ReadonlyArray<Pair>;
}


export interface TokenTokenDayDataArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
}


export interface TokenPairDayDataBaseArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
}


export interface TokenPairDayDataQuoteArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
}


export interface TokenPairBaseArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
}


export interface TokenPairQuoteArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
}

export interface TokenDayData {
  readonly __typename?: 'TokenDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly token: Token;
  readonly dailyVolumeToken: Scalars['BigDecimal'];
  readonly dailyVolumeETH: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyTxns: Scalars['BigInt'];
  readonly totalLiquidityToken: Scalars['BigDecimal'];
  readonly totalLiquidityETH: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly priceUSD: Scalars['BigDecimal'];
}

export interface TokenDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly token?: Maybe<Scalars['String']>;
  readonly token_not?: Maybe<Scalars['String']>;
  readonly token_gt?: Maybe<Scalars['String']>;
  readonly token_lt?: Maybe<Scalars['String']>;
  readonly token_gte?: Maybe<Scalars['String']>;
  readonly token_lte?: Maybe<Scalars['String']>;
  readonly token_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token_contains?: Maybe<Scalars['String']>;
  readonly token_not_contains?: Maybe<Scalars['String']>;
  readonly token_starts_with?: Maybe<Scalars['String']>;
  readonly token_not_starts_with?: Maybe<Scalars['String']>;
  readonly token_ends_with?: Maybe<Scalars['String']>;
  readonly token_not_ends_with?: Maybe<Scalars['String']>;
  readonly dailyVolumeToken?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeETH?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyTxns?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalLiquidityToken?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityToken_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly priceUSD?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly priceUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum TokenDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  DailyVolumeToken = 'dailyVolumeToken',
  DailyVolumeEth = 'dailyVolumeETH',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns',
  TotalLiquidityToken = 'totalLiquidityToken',
  TotalLiquidityEth = 'totalLiquidityETH',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  PriceUsd = 'priceUSD'
}

export interface Token_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly symbol_not?: Maybe<Scalars['String']>;
  readonly symbol_gt?: Maybe<Scalars['String']>;
  readonly symbol_lt?: Maybe<Scalars['String']>;
  readonly symbol_gte?: Maybe<Scalars['String']>;
  readonly symbol_lte?: Maybe<Scalars['String']>;
  readonly symbol_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_contains?: Maybe<Scalars['String']>;
  readonly symbol_not_contains?: Maybe<Scalars['String']>;
  readonly symbol_starts_with?: Maybe<Scalars['String']>;
  readonly symbol_not_starts_with?: Maybe<Scalars['String']>;
  readonly symbol_ends_with?: Maybe<Scalars['String']>;
  readonly symbol_not_ends_with?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly decimals?: Maybe<Scalars['BigInt']>;
  readonly decimals_not?: Maybe<Scalars['BigInt']>;
  readonly decimals_gt?: Maybe<Scalars['BigInt']>;
  readonly decimals_lt?: Maybe<Scalars['BigInt']>;
  readonly decimals_gte?: Maybe<Scalars['BigInt']>;
  readonly decimals_lte?: Maybe<Scalars['BigInt']>;
  readonly decimals_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly decimals_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalSupply?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_not?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigInt']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tradeVolume?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_not?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_gt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_lt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_gte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_lte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolume_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: Maybe<Scalars['BigInt']>;
  readonly txCount_not?: Maybe<Scalars['BigInt']>;
  readonly txCount_gt?: Maybe<Scalars['BigInt']>;
  readonly txCount_lt?: Maybe<Scalars['BigInt']>;
  readonly txCount_gte?: Maybe<Scalars['BigInt']>;
  readonly txCount_lte?: Maybe<Scalars['BigInt']>;
  readonly txCount_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedETH?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Token_OrderBy {
  Id = 'id',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  TradeVolume = 'tradeVolume',
  TradeVolumeUsd = 'tradeVolumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TxCount = 'txCount',
  TotalLiquidity = 'totalLiquidity',
  DerivedEth = 'derivedETH',
  TokenDayData = 'tokenDayData',
  PairDayDataBase = 'pairDayDataBase',
  PairDayDataQuote = 'pairDayDataQuote',
  PairBase = 'pairBase',
  PairQuote = 'pairQuote'
}

export interface Transaction {
  readonly __typename?: 'Transaction';
  readonly id: Scalars['ID'];
  readonly blockNumber: Scalars['BigInt'];
  readonly timestamp: Scalars['BigInt'];
  readonly mints: ReadonlyArray<Maybe<Mint>>;
  readonly burns: ReadonlyArray<Maybe<Burn>>;
  readonly swaps: ReadonlyArray<Maybe<Swap>>;
}


export interface TransactionMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
}


export interface TransactionBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
}


export interface TransactionSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
}

export interface Transaction_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly blockNumber?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_not?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_gt?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_lt?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_gte?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_lte?: Maybe<Scalars['BigInt']>;
  readonly blockNumber_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly blockNumber_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly mints?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
}

export enum Transaction_OrderBy {
  Id = 'id',
  BlockNumber = 'blockNumber',
  Timestamp = 'timestamp',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export interface UniswapDayData {
  readonly __typename?: 'UniswapDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly dailyVolumeETH: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyVolumeUntracked: Scalars['BigDecimal'];
  readonly totalVolumeETH: Scalars['BigDecimal'];
  readonly totalLiquidityETH: Scalars['BigDecimal'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
}

export interface UniswapDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly dailyVolumeETH?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeETH?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: Maybe<Scalars['BigInt']>;
  readonly txCount_not?: Maybe<Scalars['BigInt']>;
  readonly txCount_gt?: Maybe<Scalars['BigInt']>;
  readonly txCount_lt?: Maybe<Scalars['BigInt']>;
  readonly txCount_gte?: Maybe<Scalars['BigInt']>;
  readonly txCount_lte?: Maybe<Scalars['BigInt']>;
  readonly txCount_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum UniswapDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  DailyVolumeEth = 'dailyVolumeETH',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyVolumeUntracked = 'dailyVolumeUntracked',
  TotalVolumeEth = 'totalVolumeETH',
  TotalLiquidityEth = 'totalLiquidityETH',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TxCount = 'txCount'
}

export interface UniswapFactory {
  readonly __typename?: 'UniswapFactory';
  readonly id: Scalars['ID'];
  readonly pairCount: Scalars['Int'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly totalVolumeETH: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly totalLiquidityETH: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
}

export interface UniswapFactory_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly pairCount?: Maybe<Scalars['Int']>;
  readonly pairCount_not?: Maybe<Scalars['Int']>;
  readonly pairCount_gt?: Maybe<Scalars['Int']>;
  readonly pairCount_lt?: Maybe<Scalars['Int']>;
  readonly pairCount_gte?: Maybe<Scalars['Int']>;
  readonly pairCount_lte?: Maybe<Scalars['Int']>;
  readonly pairCount_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pairCount_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeETH?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityETH_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityETH_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: Maybe<Scalars['BigInt']>;
  readonly txCount_not?: Maybe<Scalars['BigInt']>;
  readonly txCount_gt?: Maybe<Scalars['BigInt']>;
  readonly txCount_lt?: Maybe<Scalars['BigInt']>;
  readonly txCount_gte?: Maybe<Scalars['BigInt']>;
  readonly txCount_lte?: Maybe<Scalars['BigInt']>;
  readonly txCount_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum UniswapFactory_OrderBy {
  Id = 'id',
  PairCount = 'pairCount',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalVolumeEth = 'totalVolumeETH',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalLiquidityEth = 'totalLiquidityETH',
  TxCount = 'txCount'
}

export interface User {
  readonly __typename?: 'User';
  readonly id: Scalars['ID'];
  readonly liquidityPositions?: Maybe<ReadonlyArray<LiquidityPosition>>;
  readonly usdSwapped: Scalars['BigDecimal'];
}


export interface UserLiquidityPositionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidityPosition_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidityPosition_Filter>;
}

export interface User_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly usdSwapped?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_not?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_gt?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_lt?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_gte?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_lte?: Maybe<Scalars['BigDecimal']>;
  readonly usdSwapped_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly usdSwapped_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum User_OrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions',
  UsdSwapped = 'usdSwapped'
}

export interface _Block_ {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
}

/** The type for the top-level _meta field */
export interface _Meta_ {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PairsVolumeQueryVariables = Exact<{
  limit: Scalars['Int'];
  pairIds: ReadonlyArray<Scalars['ID']>;
}>;


export type PairsVolumeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairVolumes: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'id' | 'volumeToken0' | 'volumeToken1'>
  )> }
);

export type TokenQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TokenQuery = (
  { readonly __typename?: 'Query' }
  & { readonly token?: Maybe<(
    { readonly __typename?: 'Token' }
    & Pick<Token, 'id' | 'name' | 'symbol' | 'derivedETH'>
  )> }
);

export type TokenInfoFragment = (
  { readonly __typename?: 'Token' }
  & Pick<Token, 'id' | 'symbol' | 'name' | 'derivedETH'>
);

export type TopPairsQueryVariables = Exact<{
  limit: Scalars['Int'];
  excludeTokenIds: ReadonlyArray<Scalars['String']>;
}>;


export type TopPairsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairs: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'id' | 'reserve0' | 'reserve1' | 'volumeToken0' | 'volumeToken1' | 'reserveUSD' | 'totalSupply'>
    & { readonly token0: (
      { readonly __typename?: 'Token' }
      & TokenInfoFragment
    ), readonly token1: (
      { readonly __typename?: 'Token' }
      & TokenInfoFragment
    ) }
  )> }
);

export type PairReservesQueryVariables = Exact<{
  token0: Scalars['String'];
  token1: Scalars['String'];
}>;


export type PairReservesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairs: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'reserve0' | 'reserve1'>
  )> }
);

export type BundleQueryVariables = Exact<{ [key: string]: never; }>;


export type BundleQuery = (
  { readonly __typename?: 'Query' }
  & { readonly bundle?: Maybe<(
    { readonly __typename?: 'Bundle' }
    & Pick<Bundle, 'ethPrice'>
  )> }
);

export type SwapsByPairQueryVariables = Exact<{
  skip: Scalars['Int'];
  timestamp: Scalars['BigInt'];
  pairAddress: Scalars['String'];
}>;


export type SwapsByPairQuery = (
  { readonly __typename?: 'Query' }
  & { readonly swaps: ReadonlyArray<(
    { readonly __typename?: 'Swap' }
    & Pick<Swap, 'id' | 'timestamp' | 'amount0In' | 'amount0Out' | 'amount1In' | 'amount1Out' | 'sender' | 'to' | 'amountUSD' | 'logIndex'>
  )> }
);

export type SwapsByTokensQueryVariables = Exact<{
  token0: Scalars['String'];
  token1: Scalars['String'];
}>;


export type SwapsByTokensQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairs: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'id'>
  )> }
);

export type TotalLiquidityQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalLiquidityQuery = (
  { readonly __typename?: 'Query' }
  & { readonly uniswapFactories: ReadonlyArray<(
    { readonly __typename?: 'UniswapFactory' }
    & Pick<UniswapFactory, 'totalLiquidityUSD' | 'totalVolumeUSD' | 'pairCount' | 'txCount'>
    & { totalVolumeBNB: UniswapFactory['totalVolumeETH'], totalLiquidityETH: UniswapFactory['totalLiquidityETH'] }
  )> }
);
