import type { TransactionType } from "./transaction";

export type TransactionSortType = "newest" | "oldest" | "highest" | "lowest";

export type TransactionFilterType = "all" | TransactionType;