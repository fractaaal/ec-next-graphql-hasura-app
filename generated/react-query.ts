import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  shop?: Maybe<Shops>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Items_Max_Order_By>;
  min?: InputMaybe<Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: InputMaybe<Array<Items_Bool_Exp>>;
  _not?: InputMaybe<Items_Bool_Exp>;
  _or?: InputMaybe<Array<Items_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  shop?: InputMaybe<Shops_Bool_Exp>;
  shop_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  shop?: InputMaybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  shop_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  shop_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: InputMaybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  shop?: InputMaybe<Shops_Order_By>;
  shop_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  shop_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "shops" */
  delete_shops?: Maybe<Shops_Mutation_Response>;
  /** delete single row from the table: "shops" */
  delete_shops_by_pk?: Maybe<Shops>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "shops" */
  insert_shops?: Maybe<Shops_Mutation_Response>;
  /** insert a single row into the table: "shops" */
  insert_shops_one?: Maybe<Shops>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update data of the table: "shops" */
  update_shops?: Maybe<Shops_Mutation_Response>;
  /** update single row of the table: "shops" */
  update_shops_by_pk?: Maybe<Shops>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ShopsArgs = {
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shops_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShopsArgs = {
  objects: Array<Shops_Insert_Input>;
  on_conflict?: InputMaybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shops_OneArgs = {
  object: Shops_Insert_Input;
  on_conflict?: InputMaybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: InputMaybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: InputMaybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ShopsArgs = {
  _set?: InputMaybe<Shops_Set_Input>;
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shops_By_PkArgs = {
  _set?: InputMaybe<Shops_Set_Input>;
  pk_columns: Shops_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "shops" */
  shops: Array<Shops>;
  /** fetch aggregated fields from the table: "shops" */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
};


export type Query_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootShopsArgs = {
  distinct_on?: InputMaybe<Array<Shops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shops_Order_By>>;
  where?: InputMaybe<Shops_Bool_Exp>;
};


export type Query_RootShops_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shops_Order_By>>;
  where?: InputMaybe<Shops_Bool_Exp>;
};


export type Query_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "shops" */
export type Shops = {
  __typename?: 'shops';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "shops" */
export type ShopsItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};

/** aggregated selection of "shops" */
export type Shops_Aggregate = {
  __typename?: 'shops_aggregate';
  aggregate?: Maybe<Shops_Aggregate_Fields>;
  nodes: Array<Shops>;
};

/** aggregate fields of "shops" */
export type Shops_Aggregate_Fields = {
  __typename?: 'shops_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Shops_Max_Fields>;
  min?: Maybe<Shops_Min_Fields>;
};


/** aggregate fields of "shops" */
export type Shops_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shops_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "shops". All fields are combined with a logical 'AND'. */
export type Shops_Bool_Exp = {
  _and?: InputMaybe<Array<Shops_Bool_Exp>>;
  _not?: InputMaybe<Shops_Bool_Exp>;
  _or?: InputMaybe<Array<Shops_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  items?: InputMaybe<Items_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "shops" */
export enum Shops_Constraint {
  /** unique or primary key constraint */
  ShopsPkey = 'shops_pkey'
}

/** input type for inserting data into table "shops" */
export type Shops_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<Items_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Shops_Max_Fields = {
  __typename?: 'shops_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Shops_Min_Fields = {
  __typename?: 'shops_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "shops" */
export type Shops_Mutation_Response = {
  __typename?: 'shops_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shops>;
};

/** input type for inserting object relation for remote table "shops" */
export type Shops_Obj_Rel_Insert_Input = {
  data: Shops_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Shops_On_Conflict>;
};

/** on conflict condition type for table "shops" */
export type Shops_On_Conflict = {
  constraint: Shops_Constraint;
  update_columns?: Array<Shops_Update_Column>;
  where?: InputMaybe<Shops_Bool_Exp>;
};

/** Ordering options when selecting data from "shops". */
export type Shops_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<Items_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shops */
export type Shops_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "shops" */
export enum Shops_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "shops" */
export type Shops_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "shops" */
export enum Shops_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "shops" */
  shops: Array<Shops>;
  /** fetch aggregated fields from the table: "shops" */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
};


export type Subscription_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Items_Order_By>>;
  where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootShopsArgs = {
  distinct_on?: InputMaybe<Array<Shops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shops_Order_By>>;
  where?: InputMaybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Shops_Order_By>>;
  where?: InputMaybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', name: string, id: any, created_at: any }> };


export const AllItemsDocument = `
    query allItems {
  items {
    name
    id
    created_at
  }
}
    `;
export const useAllItemsQuery = <
      TData = AllItemsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AllItemsQueryVariables,
      options?: UseQueryOptions<AllItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AllItemsQuery, TError, TData>(
      variables === undefined ? ['allItems'] : ['allItems', variables],
      fetcher<AllItemsQuery, AllItemsQueryVariables>(client, AllItemsDocument, variables, headers),
      options
    );