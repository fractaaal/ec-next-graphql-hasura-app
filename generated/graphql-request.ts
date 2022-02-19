import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  index: Scalars['Int'];
  /** An array relationship */
  item_categories: Array<Item_Categories>;
  /** An aggregate relationship */
  item_categories_aggregate: Item_Categories_Aggregate;
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "categories" */
export type CategoriesItem_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesItem_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  item_categories?: InputMaybe<Item_Categories_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  item_categories?: InputMaybe<Item_Categories_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  item_categories_aggregate?: InputMaybe<Item_Categories_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  index?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "item_categories" */
export type Item_Categories = {
  __typename?: 'item_categories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  item: Items;
  item_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "item_categories" */
export type Item_Categories_Aggregate = {
  __typename?: 'item_categories_aggregate';
  aggregate?: Maybe<Item_Categories_Aggregate_Fields>;
  nodes: Array<Item_Categories>;
};

/** aggregate fields of "item_categories" */
export type Item_Categories_Aggregate_Fields = {
  __typename?: 'item_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Item_Categories_Max_Fields>;
  min?: Maybe<Item_Categories_Min_Fields>;
};


/** aggregate fields of "item_categories" */
export type Item_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item_categories" */
export type Item_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Item_Categories_Max_Order_By>;
  min?: InputMaybe<Item_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "item_categories" */
export type Item_Categories_Arr_Rel_Insert_Input = {
  data: Array<Item_Categories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Item_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "item_categories". All fields are combined with a logical 'AND'. */
export type Item_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Categories_Bool_Exp>>;
  _not?: InputMaybe<Item_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Categories_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Items_Bool_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "item_categories" */
export enum Item_Categories_Constraint {
  /** unique or primary key constraint */
  ItemCategoriesPkey = 'item_categories_pkey'
}

/** input type for inserting data into table "item_categories" */
export type Item_Categories_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  item?: InputMaybe<Items_Obj_Rel_Insert_Input>;
  item_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Item_Categories_Max_Fields = {
  __typename?: 'item_categories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "item_categories" */
export type Item_Categories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Categories_Min_Fields = {
  __typename?: 'item_categories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "item_categories" */
export type Item_Categories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "item_categories" */
export type Item_Categories_Mutation_Response = {
  __typename?: 'item_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Item_Categories>;
};

/** on conflict condition type for table "item_categories" */
export type Item_Categories_On_Conflict = {
  constraint: Item_Categories_Constraint;
  update_columns?: Array<Item_Categories_Update_Column>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "item_categories". */
export type Item_Categories_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Items_Order_By>;
  item_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item_categories */
export type Item_Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "item_categories" */
export enum Item_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "item_categories" */
export type Item_Categories_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "item_categories" */
export enum Item_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  category?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  item_categories: Array<Item_Categories>;
  /** An aggregate relationship */
  item_categories_aggregate: Item_Categories_Aggregate;
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  /** An object relationship */
  shop?: Maybe<Shops>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "items" */
export type ItemsItem_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsItem_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
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
  avg?: Maybe<Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
  stddev?: Maybe<Items_Stddev_Fields>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Fields>;
  sum?: Maybe<Items_Sum_Fields>;
  var_pop?: Maybe<Items_Var_Pop_Fields>;
  var_samp?: Maybe<Items_Var_Samp_Fields>;
  variance?: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  avg?: InputMaybe<Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Items_Max_Order_By>;
  min?: InputMaybe<Items_Min_Order_By>;
  stddev?: InputMaybe<Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Items_Sum_Order_By>;
  var_pop?: InputMaybe<Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "items" */
export type Items_Avg_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: InputMaybe<Array<Items_Bool_Exp>>;
  _not?: InputMaybe<Items_Bool_Exp>;
  _or?: InputMaybe<Array<Items_Bool_Exp>>;
  category?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  detail?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  item_categories?: InputMaybe<Item_Categories_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  shop?: InputMaybe<Shops_Bool_Exp>;
  shop_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing numeric columns in table "items" */
export type Items_Inc_Input = {
  category?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  category?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  detail?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  item_categories?: InputMaybe<Item_Categories_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  shop?: InputMaybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  category?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  shop_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  category?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
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

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: InputMaybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  item_categories_aggregate?: InputMaybe<Item_Categories_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
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
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  category?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  detail?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  shop_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "items" */
export type Items_Stddev_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "items" */
export type Items_Stddev_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "items" */
export type Items_Stddev_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  category?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "items" */
export type Items_Sum_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "items" */
export type Items_Var_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "items" */
export type Items_Var_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  category?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "items" */
export type Items_Variance_Order_By = {
  category?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "item_categories" */
  delete_item_categories?: Maybe<Item_Categories_Mutation_Response>;
  /** delete single row from the table: "item_categories" */
  delete_item_categories_by_pk?: Maybe<Item_Categories>;
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "shops" */
  delete_shops?: Maybe<Shops_Mutation_Response>;
  /** delete single row from the table: "shops" */
  delete_shops_by_pk?: Maybe<Shops>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "item_categories" */
  insert_item_categories?: Maybe<Item_Categories_Mutation_Response>;
  /** insert a single row into the table: "item_categories" */
  insert_item_categories_one?: Maybe<Item_Categories>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "shops" */
  insert_shops?: Maybe<Shops_Mutation_Response>;
  /** insert a single row into the table: "shops" */
  insert_shops_one?: Maybe<Shops>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "item_categories" */
  update_item_categories?: Maybe<Item_Categories_Mutation_Response>;
  /** update single row of the table: "item_categories" */
  update_item_categories_by_pk?: Maybe<Item_Categories>;
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
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Item_CategoriesArgs = {
  where: Item_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_Categories_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_CategoriesArgs = {
  objects: Array<Item_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Item_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_Categories_OneArgs = {
  object: Item_Categories_Insert_Input;
  on_conflict?: InputMaybe<Item_Categories_On_Conflict>;
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
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Item_CategoriesArgs = {
  _set?: InputMaybe<Item_Categories_Set_Input>;
  where: Item_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_Categories_By_PkArgs = {
  _set?: InputMaybe<Item_Categories_Set_Input>;
  pk_columns: Item_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _inc?: InputMaybe<Items_Inc_Input>;
  _set?: InputMaybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _inc?: InputMaybe<Items_Inc_Input>;
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
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  item_categories: Array<Item_Categories>;
  /** An aggregate relationship */
  item_categories_aggregate: Item_Categories_Aggregate;
  /** fetch data from the table: "item_categories" using primary key columns */
  item_categories_by_pk?: Maybe<Item_Categories>;
  /** An array relationship */
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


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootItem_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


export type Query_RootItem_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


export type Query_RootItem_Categories_By_PkArgs = {
  id: Scalars['uuid'];
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
  /** An array relationship */
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
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  item_categories: Array<Item_Categories>;
  /** An aggregate relationship */
  item_categories_aggregate: Item_Categories_Aggregate;
  /** fetch data from the table: "item_categories" using primary key columns */
  item_categories_by_pk?: Maybe<Item_Categories>;
  /** An array relationship */
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


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootItem_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


export type Subscription_RootItem_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Categories_Order_By>>;
  where?: InputMaybe<Item_Categories_Bool_Exp>;
};


export type Subscription_RootItem_Categories_By_PkArgs = {
  id: Scalars['uuid'];
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

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string, index: number }> };

export type AllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', id: any, image_url?: string | null, detail?: string | null, created_at: any, category?: number | null, name: string, price?: number | null, shop?: { __typename?: 'shops', id: any, name: string } | null, item_categories: Array<{ __typename?: 'item_categories', category: { __typename?: 'categories', name: string, index: number } }> }> };

export type OrderCategoryItemsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  category: Scalars['String'];
}>;


export type OrderCategoryItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', id: any, image_url?: string | null, detail?: string | null, created_at: any, category?: number | null, name: string, price?: number | null, shop?: { __typename?: 'shops', id: any, name: string } | null }> };

export type OrderPriceItemsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type OrderPriceItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', id: any, image_url?: string | null, detail?: string | null, created_at: any, category?: number | null, name: string, price?: number | null, shop?: { __typename?: 'shops', id: any, name: string } | null, item_categories: Array<{ __typename?: 'item_categories', category: { __typename?: 'categories', name: string, index: number } }> }> };

export type PagenationAllItemsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type PagenationAllItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', id: any, image_url?: string | null, detail?: string | null, created_at: any, category?: number | null, name: string, price?: number | null, shop?: { __typename?: 'shops', id: any, name: string } | null, item_categories: Array<{ __typename?: 'item_categories', category: { __typename?: 'categories', name: string, index: number } }> }> };

export type PickItemQueryVariables = Exact<{
  itemId: Scalars['uuid'];
}>;


export type PickItemQuery = { __typename?: 'query_root', items_by_pk?: { __typename?: 'items', id: any, image_url?: string | null, detail?: string | null, created_at: any, category?: number | null, name: string, price?: number | null, shop?: { __typename?: 'shops', id: any, name: string } | null, item_categories: Array<{ __typename?: 'item_categories', category: { __typename?: 'categories', name: string, index: number } }> } | null };


export const AllCategoriesDocument = gql`
    query allCategories {
  categories {
    id
    name
    index
  }
}
    `;
export const AllItemsDocument = gql`
    query allItems {
  items {
    id
    image_url
    detail
    created_at
    category
    name
    price
    shop {
      id
      name
    }
    item_categories {
      category {
        name
        index
      }
    }
  }
}
    `;
export const OrderCategoryItemsDocument = gql`
    query orderCategoryItems($offset: Int!, $limit: Int!, $category: String!) {
  items(
    offset: $offset
    limit: $limit
    where: {item_categories: {category: {name: {_eq: $category}}}}
  ) {
    id
    image_url
    detail
    created_at
    category
    name
    price
    shop {
      id
      name
    }
  }
}
    `;
export const OrderPriceItemsDocument = gql`
    query orderPriceItems($offset: Int!, $limit: Int!) {
  items(offset: $offset, limit: $limit, order_by: {price: asc}) {
    id
    image_url
    detail
    created_at
    category
    name
    price
    shop {
      id
      name
    }
    item_categories {
      category {
        name
        index
      }
    }
  }
}
    `;
export const PagenationAllItemsDocument = gql`
    query pagenationAllItems($offset: Int!, $limit: Int!) {
  items(offset: $offset, limit: $limit) {
    id
    image_url
    detail
    created_at
    category
    name
    price
    shop {
      id
      name
    }
    item_categories {
      category {
        name
        index
      }
    }
  }
}
    `;
export const PickItemDocument = gql`
    query pickItem($itemId: uuid!) {
  items_by_pk(id: $itemId) {
    id
    image_url
    detail
    created_at
    category
    name
    price
    shop {
      id
      name
    }
    item_categories {
      category {
        name
        index
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allCategories(variables?: AllCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllCategoriesQuery>(AllCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allCategories');
    },
    allItems(variables?: AllItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllItemsQuery>(AllItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allItems');
    },
    orderCategoryItems(variables: OrderCategoryItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrderCategoryItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrderCategoryItemsQuery>(OrderCategoryItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orderCategoryItems');
    },
    orderPriceItems(variables: OrderPriceItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrderPriceItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrderPriceItemsQuery>(OrderPriceItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orderPriceItems');
    },
    pagenationAllItems(variables: PagenationAllItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PagenationAllItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagenationAllItemsQuery>(PagenationAllItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pagenationAllItems');
    },
    pickItem(variables: PickItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PickItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PickItemQuery>(PickItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pickItem');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;