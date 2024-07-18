
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    getTrue(): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface IMutation {
    setTrue(newTrue?: Nullable<boolean>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface ISubscription {
    trueUpdated(): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
