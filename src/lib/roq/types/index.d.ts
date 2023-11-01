/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model reimbursement
 *
 */
export type reimbursement = $Result.DefaultSelection<Prisma.$reimbursementPayload>;
/**
 * Model sick_leave
 *
 */
export type sick_leave = $Result.DefaultSelection<Prisma.$sick_leavePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vacation
 *
 */
export type vacation = $Result.DefaultSelection<Prisma.$vacationPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.reimbursement`: Exposes CRUD operations for the **reimbursement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reimbursements
   * const reimbursements = await prisma.reimbursement.findMany()
   * ```
   */
  get reimbursement(): Prisma.reimbursementDelegate<ExtArgs>;

  /**
   * `prisma.sick_leave`: Exposes CRUD operations for the **sick_leave** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sick_leaves
   * const sick_leaves = await prisma.sick_leave.findMany()
   * ```
   */
  get sick_leave(): Prisma.sick_leaveDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vacation`: Exposes CRUD operations for the **vacation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vacations
   * const vacations = await prisma.vacation.findMany()
   * ```
   */
  get vacation(): Prisma.vacationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    employee: 'employee';
    organization: 'organization';
    reimbursement: 'reimbursement';
    sick_leave: 'sick_leave';
    user: 'user';
    vacation: 'vacation';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'employee' | 'organization' | 'reimbursement' | 'sick_leave' | 'user' | 'vacation';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      reimbursement: {
        payload: Prisma.$reimbursementPayload<ExtArgs>;
        fields: Prisma.reimbursementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reimbursementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reimbursementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          findFirst: {
            args: Prisma.reimbursementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reimbursementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          findMany: {
            args: Prisma.reimbursementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>[];
          };
          create: {
            args: Prisma.reimbursementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          createMany: {
            args: Prisma.reimbursementCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reimbursementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          update: {
            args: Prisma.reimbursementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          deleteMany: {
            args: Prisma.reimbursementDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reimbursementUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reimbursementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reimbursementPayload>;
          };
          aggregate: {
            args: Prisma.ReimbursementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReimbursement>;
          };
          groupBy: {
            args: Prisma.reimbursementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReimbursementGroupByOutputType>[];
          };
          count: {
            args: Prisma.reimbursementCountArgs<ExtArgs>;
            result: $Utils.Optional<ReimbursementCountAggregateOutputType> | number;
          };
        };
      };
      sick_leave: {
        payload: Prisma.$sick_leavePayload<ExtArgs>;
        fields: Prisma.sick_leaveFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sick_leaveFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sick_leaveFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          findFirst: {
            args: Prisma.sick_leaveFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sick_leaveFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          findMany: {
            args: Prisma.sick_leaveFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>[];
          };
          create: {
            args: Prisma.sick_leaveCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          createMany: {
            args: Prisma.sick_leaveCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.sick_leaveDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          update: {
            args: Prisma.sick_leaveUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          deleteMany: {
            args: Prisma.sick_leaveDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.sick_leaveUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.sick_leaveUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sick_leavePayload>;
          };
          aggregate: {
            args: Prisma.Sick_leaveAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSick_leave>;
          };
          groupBy: {
            args: Prisma.sick_leaveGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Sick_leaveGroupByOutputType>[];
          };
          count: {
            args: Prisma.sick_leaveCountArgs<ExtArgs>;
            result: $Utils.Optional<Sick_leaveCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vacation: {
        payload: Prisma.$vacationPayload<ExtArgs>;
        fields: Prisma.vacationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vacationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vacationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          findFirst: {
            args: Prisma.vacationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vacationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          findMany: {
            args: Prisma.vacationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>[];
          };
          create: {
            args: Prisma.vacationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          createMany: {
            args: Prisma.vacationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vacationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          update: {
            args: Prisma.vacationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          deleteMany: {
            args: Prisma.vacationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vacationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vacationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vacationPayload>;
          };
          aggregate: {
            args: Prisma.VacationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVacation>;
          };
          groupBy: {
            args: Prisma.vacationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VacationGroupByOutputType>[];
          };
          count: {
            args: Prisma.vacationCountArgs<ExtArgs>;
            result: $Utils.Optional<VacationCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    reimbursement: number;
    sick_leave: number;
    vacation: number;
  };

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reimbursement?: boolean | EmployeeCountOutputTypeCountReimbursementArgs;
    sick_leave?: boolean | EmployeeCountOutputTypeCountSick_leaveArgs;
    vacation?: boolean | EmployeeCountOutputTypeCountVacationArgs;
  };

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountReimbursementArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reimbursementWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSick_leaveArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sick_leaveWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountVacationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: vacationWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    employee: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | OrganizationCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employee: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    salary: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    hire_date: Date | null;
    job_title: string | null;
    salary: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    hire_date: number;
    job_title: number;
    salary: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    hire_date?: true;
    job_title?: true;
    salary?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    hire_date: Date;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        hire_date?: boolean;
        job_title?: boolean;
        salary?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        reimbursement?: boolean | employee$reimbursementArgs<ExtArgs>;
        sick_leave?: boolean | employee$sick_leaveArgs<ExtArgs>;
        vacation?: boolean | employee$vacationArgs<ExtArgs>;
        _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    hire_date?: boolean;
    job_title?: boolean;
    salary?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    reimbursement?: boolean | employee$reimbursementArgs<ExtArgs>;
    sick_leave?: boolean | employee$sick_leaveArgs<ExtArgs>;
    vacation?: boolean | employee$vacationArgs<ExtArgs>;
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      reimbursement: Prisma.$reimbursementPayload<ExtArgs>[];
      sick_leave: Prisma.$sick_leavePayload<ExtArgs>[];
      vacation: Prisma.$vacationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        hire_date: Date;
        job_title: string;
        salary: number;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    reimbursement<T extends employee$reimbursementArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$reimbursementArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findMany'> | Null>;

    sick_leave<T extends employee$sick_leaveArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$sick_leaveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findMany'> | Null>;

    vacation<T extends employee$vacationArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$vacationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly hire_date: FieldRef<'employee', 'DateTime'>;
    readonly job_title: FieldRef<'employee', 'String'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly organization_id: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee.reimbursement
   */
  export type employee$reimbursementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    where?: reimbursementWhereInput;
    orderBy?: reimbursementOrderByWithRelationInput | reimbursementOrderByWithRelationInput[];
    cursor?: reimbursementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReimbursementScalarFieldEnum | ReimbursementScalarFieldEnum[];
  };

  /**
   * employee.sick_leave
   */
  export type employee$sick_leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    where?: sick_leaveWhereInput;
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    cursor?: sick_leaveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * employee.vacation
   */
  export type employee$vacationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    where?: vacationWhereInput;
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    cursor?: vacationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
        employee?: boolean | organization$employeeArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | organization$employeeArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends organization$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.employee
   */
  export type organization$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model reimbursement
   */

  export type AggregateReimbursement = {
    _count: ReimbursementCountAggregateOutputType | null;
    _avg: ReimbursementAvgAggregateOutputType | null;
    _sum: ReimbursementSumAggregateOutputType | null;
    _min: ReimbursementMinAggregateOutputType | null;
    _max: ReimbursementMaxAggregateOutputType | null;
  };

  export type ReimbursementAvgAggregateOutputType = {
    amount: number | null;
  };

  export type ReimbursementSumAggregateOutputType = {
    amount: number | null;
  };

  export type ReimbursementMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    status: string | null;
    request_date: Date | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReimbursementMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    status: string | null;
    request_date: Date | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReimbursementCountAggregateOutputType = {
    id: number;
    amount: number;
    status: number;
    request_date: number;
    employee_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReimbursementAvgAggregateInputType = {
    amount?: true;
  };

  export type ReimbursementSumAggregateInputType = {
    amount?: true;
  };

  export type ReimbursementMinAggregateInputType = {
    id?: true;
    amount?: true;
    status?: true;
    request_date?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReimbursementMaxAggregateInputType = {
    id?: true;
    amount?: true;
    status?: true;
    request_date?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReimbursementCountAggregateInputType = {
    id?: true;
    amount?: true;
    status?: true;
    request_date?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReimbursementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reimbursement to aggregate.
     */
    where?: reimbursementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reimbursements to fetch.
     */
    orderBy?: reimbursementOrderByWithRelationInput | reimbursementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reimbursementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reimbursements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reimbursements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reimbursements
     **/
    _count?: true | ReimbursementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReimbursementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReimbursementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReimbursementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReimbursementMaxAggregateInputType;
  };

  export type GetReimbursementAggregateType<T extends ReimbursementAggregateArgs> = {
    [P in keyof T & keyof AggregateReimbursement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReimbursement[P]>
      : GetScalarType<T[P], AggregateReimbursement[P]>;
  };

  export type reimbursementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reimbursementWhereInput;
    orderBy?: reimbursementOrderByWithAggregationInput | reimbursementOrderByWithAggregationInput[];
    by: ReimbursementScalarFieldEnum[] | ReimbursementScalarFieldEnum;
    having?: reimbursementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReimbursementCountAggregateInputType | true;
    _avg?: ReimbursementAvgAggregateInputType;
    _sum?: ReimbursementSumAggregateInputType;
    _min?: ReimbursementMinAggregateInputType;
    _max?: ReimbursementMaxAggregateInputType;
  };

  export type ReimbursementGroupByOutputType = {
    id: string;
    amount: number;
    status: string;
    request_date: Date;
    employee_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReimbursementCountAggregateOutputType | null;
    _avg: ReimbursementAvgAggregateOutputType | null;
    _sum: ReimbursementSumAggregateOutputType | null;
    _min: ReimbursementMinAggregateOutputType | null;
    _max: ReimbursementMaxAggregateOutputType | null;
  };

  type GetReimbursementGroupByPayload<T extends reimbursementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReimbursementGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReimbursementGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReimbursementGroupByOutputType[P]>
          : GetScalarType<T[P], ReimbursementGroupByOutputType[P]>;
      }
    >
  >;

  export type reimbursementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        amount?: boolean;
        status?: boolean;
        request_date?: boolean;
        employee_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['reimbursement']
    >;

  export type reimbursementSelectScalar = {
    id?: boolean;
    amount?: boolean;
    status?: boolean;
    request_date?: boolean;
    employee_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reimbursementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $reimbursementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'reimbursement';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        status: string;
        request_date: Date;
        employee_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['reimbursement']
    >;
    composites: {};
  };

  type reimbursementGetPayload<S extends boolean | null | undefined | reimbursementDefaultArgs> = $Result.GetResult<
    Prisma.$reimbursementPayload,
    S
  >;

  type reimbursementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reimbursementFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReimbursementCountAggregateInputType | true;
  };

  export interface reimbursementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reimbursement']; meta: { name: 'reimbursement' } };
    /**
     * Find zero or one Reimbursement that matches the filter.
     * @param {reimbursementFindUniqueArgs} args - Arguments to find a Reimbursement
     * @example
     * // Get one Reimbursement
     * const reimbursement = await prisma.reimbursement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reimbursementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementFindUniqueArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Reimbursement that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reimbursementFindUniqueOrThrowArgs} args - Arguments to find a Reimbursement
     * @example
     * // Get one Reimbursement
     * const reimbursement = await prisma.reimbursement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reimbursementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Reimbursement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementFindFirstArgs} args - Arguments to find a Reimbursement
     * @example
     * // Get one Reimbursement
     * const reimbursement = await prisma.reimbursement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reimbursementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementFindFirstArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Reimbursement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementFindFirstOrThrowArgs} args - Arguments to find a Reimbursement
     * @example
     * // Get one Reimbursement
     * const reimbursement = await prisma.reimbursement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reimbursementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reimbursements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reimbursements
     * const reimbursements = await prisma.reimbursement.findMany()
     *
     * // Get first 10 Reimbursements
     * const reimbursements = await prisma.reimbursement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reimbursementWithIdOnly = await prisma.reimbursement.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reimbursementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Reimbursement.
     * @param {reimbursementCreateArgs} args - Arguments to create a Reimbursement.
     * @example
     * // Create one Reimbursement
     * const Reimbursement = await prisma.reimbursement.create({
     *   data: {
     *     // ... data to create a Reimbursement
     *   }
     * })
     *
     **/
    create<T extends reimbursementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementCreateArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Reimbursements.
     *     @param {reimbursementCreateManyArgs} args - Arguments to create many Reimbursements.
     *     @example
     *     // Create many Reimbursements
     *     const reimbursement = await prisma.reimbursement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reimbursementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Reimbursement.
     * @param {reimbursementDeleteArgs} args - Arguments to delete one Reimbursement.
     * @example
     * // Delete one Reimbursement
     * const Reimbursement = await prisma.reimbursement.delete({
     *   where: {
     *     // ... filter to delete one Reimbursement
     *   }
     * })
     *
     **/
    delete<T extends reimbursementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementDeleteArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Reimbursement.
     * @param {reimbursementUpdateArgs} args - Arguments to update one Reimbursement.
     * @example
     * // Update one Reimbursement
     * const reimbursement = await prisma.reimbursement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reimbursementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementUpdateArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Reimbursements.
     * @param {reimbursementDeleteManyArgs} args - Arguments to filter Reimbursements to delete.
     * @example
     * // Delete a few Reimbursements
     * const { count } = await prisma.reimbursement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reimbursementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reimbursementDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reimbursements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reimbursements
     * const reimbursement = await prisma.reimbursement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reimbursementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Reimbursement.
     * @param {reimbursementUpsertArgs} args - Arguments to update or create a Reimbursement.
     * @example
     * // Update or create a Reimbursement
     * const reimbursement = await prisma.reimbursement.upsert({
     *   create: {
     *     // ... data to create a Reimbursement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reimbursement we want to update
     *   }
     * })
     **/
    upsert<T extends reimbursementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reimbursementUpsertArgs<ExtArgs>>,
    ): Prisma__reimbursementClient<
      $Result.GetResult<Prisma.$reimbursementPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Reimbursements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementCountArgs} args - Arguments to filter Reimbursements to count.
     * @example
     * // Count the number of Reimbursements
     * const count = await prisma.reimbursement.count({
     *   where: {
     *     // ... the filter for the Reimbursements we want to count
     *   }
     * })
     **/
    count<T extends reimbursementCountArgs>(
      args?: Subset<T, reimbursementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReimbursementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reimbursement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReimbursementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReimbursementAggregateArgs>(
      args: Subset<T, ReimbursementAggregateArgs>,
    ): Prisma.PrismaPromise<GetReimbursementAggregateType<T>>;

    /**
     * Group by Reimbursement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reimbursementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reimbursementGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reimbursementGroupByArgs['orderBy'] }
        : { orderBy?: reimbursementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reimbursementGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReimbursementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reimbursement model
     */
    readonly fields: reimbursementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reimbursement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reimbursementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the reimbursement model
   */
  interface reimbursementFieldRefs {
    readonly id: FieldRef<'reimbursement', 'String'>;
    readonly amount: FieldRef<'reimbursement', 'Int'>;
    readonly status: FieldRef<'reimbursement', 'String'>;
    readonly request_date: FieldRef<'reimbursement', 'DateTime'>;
    readonly employee_id: FieldRef<'reimbursement', 'String'>;
    readonly created_at: FieldRef<'reimbursement', 'DateTime'>;
    readonly updated_at: FieldRef<'reimbursement', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * reimbursement findUnique
   */
  export type reimbursementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter, which reimbursement to fetch.
     */
    where: reimbursementWhereUniqueInput;
  };

  /**
   * reimbursement findUniqueOrThrow
   */
  export type reimbursementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter, which reimbursement to fetch.
     */
    where: reimbursementWhereUniqueInput;
  };

  /**
   * reimbursement findFirst
   */
  export type reimbursementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter, which reimbursement to fetch.
     */
    where?: reimbursementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reimbursements to fetch.
     */
    orderBy?: reimbursementOrderByWithRelationInput | reimbursementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reimbursements.
     */
    cursor?: reimbursementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reimbursements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reimbursements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reimbursements.
     */
    distinct?: ReimbursementScalarFieldEnum | ReimbursementScalarFieldEnum[];
  };

  /**
   * reimbursement findFirstOrThrow
   */
  export type reimbursementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter, which reimbursement to fetch.
     */
    where?: reimbursementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reimbursements to fetch.
     */
    orderBy?: reimbursementOrderByWithRelationInput | reimbursementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reimbursements.
     */
    cursor?: reimbursementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reimbursements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reimbursements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reimbursements.
     */
    distinct?: ReimbursementScalarFieldEnum | ReimbursementScalarFieldEnum[];
  };

  /**
   * reimbursement findMany
   */
  export type reimbursementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter, which reimbursements to fetch.
     */
    where?: reimbursementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reimbursements to fetch.
     */
    orderBy?: reimbursementOrderByWithRelationInput | reimbursementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reimbursements.
     */
    cursor?: reimbursementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reimbursements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reimbursements.
     */
    skip?: number;
    distinct?: ReimbursementScalarFieldEnum | ReimbursementScalarFieldEnum[];
  };

  /**
   * reimbursement create
   */
  export type reimbursementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * The data needed to create a reimbursement.
     */
    data: XOR<reimbursementCreateInput, reimbursementUncheckedCreateInput>;
  };

  /**
   * reimbursement createMany
   */
  export type reimbursementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reimbursements.
     */
    data: reimbursementCreateManyInput | reimbursementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * reimbursement update
   */
  export type reimbursementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * The data needed to update a reimbursement.
     */
    data: XOR<reimbursementUpdateInput, reimbursementUncheckedUpdateInput>;
    /**
     * Choose, which reimbursement to update.
     */
    where: reimbursementWhereUniqueInput;
  };

  /**
   * reimbursement updateMany
   */
  export type reimbursementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reimbursements.
     */
    data: XOR<reimbursementUpdateManyMutationInput, reimbursementUncheckedUpdateManyInput>;
    /**
     * Filter which reimbursements to update
     */
    where?: reimbursementWhereInput;
  };

  /**
   * reimbursement upsert
   */
  export type reimbursementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * The filter to search for the reimbursement to update in case it exists.
     */
    where: reimbursementWhereUniqueInput;
    /**
     * In case the reimbursement found by the `where` argument doesn't exist, create a new reimbursement with this data.
     */
    create: XOR<reimbursementCreateInput, reimbursementUncheckedCreateInput>;
    /**
     * In case the reimbursement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reimbursementUpdateInput, reimbursementUncheckedUpdateInput>;
  };

  /**
   * reimbursement delete
   */
  export type reimbursementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
    /**
     * Filter which reimbursement to delete.
     */
    where: reimbursementWhereUniqueInput;
  };

  /**
   * reimbursement deleteMany
   */
  export type reimbursementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reimbursements to delete
     */
    where?: reimbursementWhereInput;
  };

  /**
   * reimbursement without action
   */
  export type reimbursementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reimbursement
     */
    select?: reimbursementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reimbursementInclude<ExtArgs> | null;
  };

  /**
   * Model sick_leave
   */

  export type AggregateSick_leave = {
    _count: Sick_leaveCountAggregateOutputType | null;
    _min: Sick_leaveMinAggregateOutputType | null;
    _max: Sick_leaveMaxAggregateOutputType | null;
  };

  export type Sick_leaveMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sick_leaveMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sick_leaveCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    status: number;
    employee_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Sick_leaveMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sick_leaveMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sick_leaveCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Sick_leaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sick_leave to aggregate.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sick_leaves
     **/
    _count?: true | Sick_leaveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Sick_leaveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Sick_leaveMaxAggregateInputType;
  };

  export type GetSick_leaveAggregateType<T extends Sick_leaveAggregateArgs> = {
    [P in keyof T & keyof AggregateSick_leave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSick_leave[P]>
      : GetScalarType<T[P], AggregateSick_leave[P]>;
  };

  export type sick_leaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sick_leaveWhereInput;
    orderBy?: sick_leaveOrderByWithAggregationInput | sick_leaveOrderByWithAggregationInput[];
    by: Sick_leaveScalarFieldEnum[] | Sick_leaveScalarFieldEnum;
    having?: sick_leaveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sick_leaveCountAggregateInputType | true;
    _min?: Sick_leaveMinAggregateInputType;
    _max?: Sick_leaveMaxAggregateInputType;
  };

  export type Sick_leaveGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    status: string;
    employee_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Sick_leaveCountAggregateOutputType | null;
    _min: Sick_leaveMinAggregateOutputType | null;
    _max: Sick_leaveMaxAggregateOutputType | null;
  };

  type GetSick_leaveGroupByPayload<T extends sick_leaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sick_leaveGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Sick_leaveGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Sick_leaveGroupByOutputType[P]>
          : GetScalarType<T[P], Sick_leaveGroupByOutputType[P]>;
      }
    >
  >;

  export type sick_leaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        status?: boolean;
        employee_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['sick_leave']
    >;

  export type sick_leaveSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    employee_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type sick_leaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $sick_leavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sick_leave';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        status: string;
        employee_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sick_leave']
    >;
    composites: {};
  };

  type sick_leaveGetPayload<S extends boolean | null | undefined | sick_leaveDefaultArgs> = $Result.GetResult<
    Prisma.$sick_leavePayload,
    S
  >;

  type sick_leaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    sick_leaveFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Sick_leaveCountAggregateInputType | true;
  };

  export interface sick_leaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sick_leave']; meta: { name: 'sick_leave' } };
    /**
     * Find zero or one Sick_leave that matches the filter.
     * @param {sick_leaveFindUniqueArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends sick_leaveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveFindUniqueArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Sick_leave that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {sick_leaveFindUniqueOrThrowArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends sick_leaveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Sick_leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindFirstArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends sick_leaveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindFirstArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Sick_leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindFirstOrThrowArgs} args - Arguments to find a Sick_leave
     * @example
     * // Get one Sick_leave
     * const sick_leave = await prisma.sick_leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends sick_leaveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<
      $Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sick_leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sick_leaves
     * const sick_leaves = await prisma.sick_leave.findMany()
     *
     * // Get first 10 Sick_leaves
     * const sick_leaves = await prisma.sick_leave.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sick_leaveWithIdOnly = await prisma.sick_leave.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends sick_leaveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sick_leave.
     * @param {sick_leaveCreateArgs} args - Arguments to create a Sick_leave.
     * @example
     * // Create one Sick_leave
     * const Sick_leave = await prisma.sick_leave.create({
     *   data: {
     *     // ... data to create a Sick_leave
     *   }
     * })
     *
     **/
    create<T extends sick_leaveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveCreateArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sick_leaves.
     *     @param {sick_leaveCreateManyArgs} args - Arguments to create many Sick_leaves.
     *     @example
     *     // Create many Sick_leaves
     *     const sick_leave = await prisma.sick_leave.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends sick_leaveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sick_leave.
     * @param {sick_leaveDeleteArgs} args - Arguments to delete one Sick_leave.
     * @example
     * // Delete one Sick_leave
     * const Sick_leave = await prisma.sick_leave.delete({
     *   where: {
     *     // ... filter to delete one Sick_leave
     *   }
     * })
     *
     **/
    delete<T extends sick_leaveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveDeleteArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sick_leave.
     * @param {sick_leaveUpdateArgs} args - Arguments to update one Sick_leave.
     * @example
     * // Update one Sick_leave
     * const sick_leave = await prisma.sick_leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends sick_leaveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpdateArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sick_leaves.
     * @param {sick_leaveDeleteManyArgs} args - Arguments to filter Sick_leaves to delete.
     * @example
     * // Delete a few Sick_leaves
     * const { count } = await prisma.sick_leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends sick_leaveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sick_leaveDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sick_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sick_leaves
     * const sick_leave = await prisma.sick_leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends sick_leaveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sick_leave.
     * @param {sick_leaveUpsertArgs} args - Arguments to update or create a Sick_leave.
     * @example
     * // Update or create a Sick_leave
     * const sick_leave = await prisma.sick_leave.upsert({
     *   create: {
     *     // ... data to create a Sick_leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sick_leave we want to update
     *   }
     * })
     **/
    upsert<T extends sick_leaveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sick_leaveUpsertArgs<ExtArgs>>,
    ): Prisma__sick_leaveClient<$Result.GetResult<Prisma.$sick_leavePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sick_leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveCountArgs} args - Arguments to filter Sick_leaves to count.
     * @example
     * // Count the number of Sick_leaves
     * const count = await prisma.sick_leave.count({
     *   where: {
     *     // ... the filter for the Sick_leaves we want to count
     *   }
     * })
     **/
    count<T extends sick_leaveCountArgs>(
      args?: Subset<T, sick_leaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sick_leaveCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sick_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sick_leaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Sick_leaveAggregateArgs>(
      args: Subset<T, Sick_leaveAggregateArgs>,
    ): Prisma.PrismaPromise<GetSick_leaveAggregateType<T>>;

    /**
     * Group by Sick_leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sick_leaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends sick_leaveGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sick_leaveGroupByArgs['orderBy'] }
        : { orderBy?: sick_leaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, sick_leaveGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSick_leaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sick_leave model
     */
    readonly fields: sick_leaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sick_leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sick_leaveClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sick_leave model
   */
  interface sick_leaveFieldRefs {
    readonly id: FieldRef<'sick_leave', 'String'>;
    readonly start_date: FieldRef<'sick_leave', 'DateTime'>;
    readonly end_date: FieldRef<'sick_leave', 'DateTime'>;
    readonly status: FieldRef<'sick_leave', 'String'>;
    readonly employee_id: FieldRef<'sick_leave', 'String'>;
    readonly created_at: FieldRef<'sick_leave', 'DateTime'>;
    readonly updated_at: FieldRef<'sick_leave', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sick_leave findUnique
   */
  export type sick_leaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave findUniqueOrThrow
   */
  export type sick_leaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave findFirst
   */
  export type sick_leaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sick_leaves.
     */
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave findFirstOrThrow
   */
  export type sick_leaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leave to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sick_leaves.
     */
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave findMany
   */
  export type sick_leaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter, which sick_leaves to fetch.
     */
    where?: sick_leaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sick_leaves to fetch.
     */
    orderBy?: sick_leaveOrderByWithRelationInput | sick_leaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sick_leaves.
     */
    cursor?: sick_leaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sick_leaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sick_leaves.
     */
    skip?: number;
    distinct?: Sick_leaveScalarFieldEnum | Sick_leaveScalarFieldEnum[];
  };

  /**
   * sick_leave create
   */
  export type sick_leaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The data needed to create a sick_leave.
     */
    data: XOR<sick_leaveCreateInput, sick_leaveUncheckedCreateInput>;
  };

  /**
   * sick_leave createMany
   */
  export type sick_leaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sick_leaves.
     */
    data: sick_leaveCreateManyInput | sick_leaveCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sick_leave update
   */
  export type sick_leaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The data needed to update a sick_leave.
     */
    data: XOR<sick_leaveUpdateInput, sick_leaveUncheckedUpdateInput>;
    /**
     * Choose, which sick_leave to update.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave updateMany
   */
  export type sick_leaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sick_leaves.
     */
    data: XOR<sick_leaveUpdateManyMutationInput, sick_leaveUncheckedUpdateManyInput>;
    /**
     * Filter which sick_leaves to update
     */
    where?: sick_leaveWhereInput;
  };

  /**
   * sick_leave upsert
   */
  export type sick_leaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * The filter to search for the sick_leave to update in case it exists.
     */
    where: sick_leaveWhereUniqueInput;
    /**
     * In case the sick_leave found by the `where` argument doesn't exist, create a new sick_leave with this data.
     */
    create: XOR<sick_leaveCreateInput, sick_leaveUncheckedCreateInput>;
    /**
     * In case the sick_leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sick_leaveUpdateInput, sick_leaveUncheckedUpdateInput>;
  };

  /**
   * sick_leave delete
   */
  export type sick_leaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
    /**
     * Filter which sick_leave to delete.
     */
    where: sick_leaveWhereUniqueInput;
  };

  /**
   * sick_leave deleteMany
   */
  export type sick_leaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sick_leaves to delete
     */
    where?: sick_leaveWhereInput;
  };

  /**
   * sick_leave without action
   */
  export type sick_leaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sick_leave
     */
    select?: sick_leaveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sick_leaveInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | user$employeeArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vacation
   */

  export type AggregateVacation = {
    _count: VacationCountAggregateOutputType | null;
    _min: VacationMinAggregateOutputType | null;
    _max: VacationMaxAggregateOutputType | null;
  };

  export type VacationMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VacationMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    employee_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VacationCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    status: number;
    employee_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VacationMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VacationMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VacationCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    employee_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VacationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacation to aggregate.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vacations
     **/
    _count?: true | VacationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VacationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VacationMaxAggregateInputType;
  };

  export type GetVacationAggregateType<T extends VacationAggregateArgs> = {
    [P in keyof T & keyof AggregateVacation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacation[P]>
      : GetScalarType<T[P], AggregateVacation[P]>;
  };

  export type vacationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vacationWhereInput;
    orderBy?: vacationOrderByWithAggregationInput | vacationOrderByWithAggregationInput[];
    by: VacationScalarFieldEnum[] | VacationScalarFieldEnum;
    having?: vacationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VacationCountAggregateInputType | true;
    _min?: VacationMinAggregateInputType;
    _max?: VacationMaxAggregateInputType;
  };

  export type VacationGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    status: string;
    employee_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VacationCountAggregateOutputType | null;
    _min: VacationMinAggregateOutputType | null;
    _max: VacationMaxAggregateOutputType | null;
  };

  type GetVacationGroupByPayload<T extends vacationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VacationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VacationGroupByOutputType[P]>
          : GetScalarType<T[P], VacationGroupByOutputType[P]>;
      }
    >
  >;

  export type vacationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        status?: boolean;
        employee_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['vacation']
    >;

  export type vacationSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    employee_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vacationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
  };

  export type $vacationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vacation';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        status: string;
        employee_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vacation']
    >;
    composites: {};
  };

  type vacationGetPayload<S extends boolean | null | undefined | vacationDefaultArgs> = $Result.GetResult<
    Prisma.$vacationPayload,
    S
  >;

  type vacationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vacationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VacationCountAggregateInputType | true;
  };

  export interface vacationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vacation']; meta: { name: 'vacation' } };
    /**
     * Find zero or one Vacation that matches the filter.
     * @param {vacationFindUniqueArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vacationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vacationFindUniqueArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Vacation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vacationFindUniqueOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vacationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vacation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindFirstArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vacationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindFirstArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Vacation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindFirstOrThrowArgs} args - Arguments to find a Vacation
     * @example
     * // Get one Vacation
     * const vacation = await prisma.vacation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vacationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vacationClient<
      $Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Vacations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacations
     * const vacations = await prisma.vacation.findMany()
     *
     * // Get first 10 Vacations
     * const vacations = await prisma.vacation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vacationWithIdOnly = await prisma.vacation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vacationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vacation.
     * @param {vacationCreateArgs} args - Arguments to create a Vacation.
     * @example
     * // Create one Vacation
     * const Vacation = await prisma.vacation.create({
     *   data: {
     *     // ... data to create a Vacation
     *   }
     * })
     *
     **/
    create<T extends vacationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vacationCreateArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vacations.
     *     @param {vacationCreateManyArgs} args - Arguments to create many Vacations.
     *     @example
     *     // Create many Vacations
     *     const vacation = await prisma.vacation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vacationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vacation.
     * @param {vacationDeleteArgs} args - Arguments to delete one Vacation.
     * @example
     * // Delete one Vacation
     * const Vacation = await prisma.vacation.delete({
     *   where: {
     *     // ... filter to delete one Vacation
     *   }
     * })
     *
     **/
    delete<T extends vacationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vacationDeleteArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vacation.
     * @param {vacationUpdateArgs} args - Arguments to update one Vacation.
     * @example
     * // Update one Vacation
     * const vacation = await prisma.vacation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vacationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpdateArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vacations.
     * @param {vacationDeleteManyArgs} args - Arguments to filter Vacations to delete.
     * @example
     * // Delete a few Vacations
     * const { count } = await prisma.vacation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vacationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vacationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacations
     * const vacation = await prisma.vacation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vacationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vacation.
     * @param {vacationUpsertArgs} args - Arguments to update or create a Vacation.
     * @example
     * // Update or create a Vacation
     * const vacation = await prisma.vacation.upsert({
     *   create: {
     *     // ... data to create a Vacation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacation we want to update
     *   }
     * })
     **/
    upsert<T extends vacationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vacationUpsertArgs<ExtArgs>>,
    ): Prisma__vacationClient<$Result.GetResult<Prisma.$vacationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vacations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationCountArgs} args - Arguments to filter Vacations to count.
     * @example
     * // Count the number of Vacations
     * const count = await prisma.vacation.count({
     *   where: {
     *     // ... the filter for the Vacations we want to count
     *   }
     * })
     **/
    count<T extends vacationCountArgs>(
      args?: Subset<T, vacationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VacationAggregateArgs>(
      args: Subset<T, VacationAggregateArgs>,
    ): Prisma.PrismaPromise<GetVacationAggregateType<T>>;

    /**
     * Group by Vacation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends vacationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vacationGroupByArgs['orderBy'] }
        : { orderBy?: vacationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vacationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVacationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vacation model
     */
    readonly fields: vacationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vacation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vacationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vacation model
   */
  interface vacationFieldRefs {
    readonly id: FieldRef<'vacation', 'String'>;
    readonly start_date: FieldRef<'vacation', 'DateTime'>;
    readonly end_date: FieldRef<'vacation', 'DateTime'>;
    readonly status: FieldRef<'vacation', 'String'>;
    readonly employee_id: FieldRef<'vacation', 'String'>;
    readonly created_at: FieldRef<'vacation', 'DateTime'>;
    readonly updated_at: FieldRef<'vacation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vacation findUnique
   */
  export type vacationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation findUniqueOrThrow
   */
  export type vacationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation findFirst
   */
  export type vacationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation findFirstOrThrow
   */
  export type vacationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacation to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vacations.
     */
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation findMany
   */
  export type vacationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter, which vacations to fetch.
     */
    where?: vacationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vacations to fetch.
     */
    orderBy?: vacationOrderByWithRelationInput | vacationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vacations.
     */
    cursor?: vacationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vacations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vacations.
     */
    skip?: number;
    distinct?: VacationScalarFieldEnum | VacationScalarFieldEnum[];
  };

  /**
   * vacation create
   */
  export type vacationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The data needed to create a vacation.
     */
    data: XOR<vacationCreateInput, vacationUncheckedCreateInput>;
  };

  /**
   * vacation createMany
   */
  export type vacationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vacations.
     */
    data: vacationCreateManyInput | vacationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vacation update
   */
  export type vacationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The data needed to update a vacation.
     */
    data: XOR<vacationUpdateInput, vacationUncheckedUpdateInput>;
    /**
     * Choose, which vacation to update.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation updateMany
   */
  export type vacationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vacations.
     */
    data: XOR<vacationUpdateManyMutationInput, vacationUncheckedUpdateManyInput>;
    /**
     * Filter which vacations to update
     */
    where?: vacationWhereInput;
  };

  /**
   * vacation upsert
   */
  export type vacationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * The filter to search for the vacation to update in case it exists.
     */
    where: vacationWhereUniqueInput;
    /**
     * In case the vacation found by the `where` argument doesn't exist, create a new vacation with this data.
     */
    create: XOR<vacationCreateInput, vacationUncheckedCreateInput>;
    /**
     * In case the vacation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vacationUpdateInput, vacationUncheckedUpdateInput>;
  };

  /**
   * vacation delete
   */
  export type vacationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
    /**
     * Filter which vacation to delete.
     */
    where: vacationWhereUniqueInput;
  };

  /**
   * vacation deleteMany
   */
  export type vacationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacations to delete
     */
    where?: vacationWhereInput;
  };

  /**
   * vacation without action
   */
  export type vacationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacation
     */
    select?: vacationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vacationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    hire_date: 'hire_date';
    job_title: 'job_title';
    salary: 'salary';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const ReimbursementScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    status: 'status';
    request_date: 'request_date';
    employee_id: 'employee_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReimbursementScalarFieldEnum =
    (typeof ReimbursementScalarFieldEnum)[keyof typeof ReimbursementScalarFieldEnum];

  export const Sick_leaveScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    employee_id: 'employee_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Sick_leaveScalarFieldEnum = (typeof Sick_leaveScalarFieldEnum)[keyof typeof Sick_leaveScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VacationScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    employee_id: 'employee_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VacationScalarFieldEnum = (typeof VacationScalarFieldEnum)[keyof typeof VacationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    user_id?: UuidFilter<'employee'> | string;
    organization_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    reimbursement?: ReimbursementListRelationFilter;
    sick_leave?: Sick_leaveListRelationFilter;
    vacation?: VacationListRelationFilter;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    reimbursement?: reimbursementOrderByRelationAggregateInput;
    sick_leave?: sick_leaveOrderByRelationAggregateInput;
    vacation?: vacationOrderByRelationAggregateInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      hire_date?: DateTimeFilter<'employee'> | Date | string;
      job_title?: StringFilter<'employee'> | string;
      salary?: IntFilter<'employee'> | number;
      user_id?: UuidFilter<'employee'> | string;
      organization_id?: UuidFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      reimbursement?: ReimbursementListRelationFilter;
      sick_leave?: Sick_leaveListRelationFilter;
      vacation?: VacationListRelationFilter;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    job_title?: StringWithAggregatesFilter<'employee'> | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    organization_id?: UuidWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    tenant_id?: StringFilter<'organization'> | string;
    employee?: EmployeeListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      tenant_id?: StringFilter<'organization'> | string;
      employee?: EmployeeListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type reimbursementWhereInput = {
    AND?: reimbursementWhereInput | reimbursementWhereInput[];
    OR?: reimbursementWhereInput[];
    NOT?: reimbursementWhereInput | reimbursementWhereInput[];
    id?: UuidFilter<'reimbursement'> | string;
    amount?: IntFilter<'reimbursement'> | number;
    status?: StringFilter<'reimbursement'> | string;
    request_date?: DateTimeFilter<'reimbursement'> | Date | string;
    employee_id?: UuidFilter<'reimbursement'> | string;
    created_at?: DateTimeFilter<'reimbursement'> | Date | string;
    updated_at?: DateTimeFilter<'reimbursement'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type reimbursementOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    request_date?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type reimbursementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reimbursementWhereInput | reimbursementWhereInput[];
      OR?: reimbursementWhereInput[];
      NOT?: reimbursementWhereInput | reimbursementWhereInput[];
      amount?: IntFilter<'reimbursement'> | number;
      status?: StringFilter<'reimbursement'> | string;
      request_date?: DateTimeFilter<'reimbursement'> | Date | string;
      employee_id?: UuidFilter<'reimbursement'> | string;
      created_at?: DateTimeFilter<'reimbursement'> | Date | string;
      updated_at?: DateTimeFilter<'reimbursement'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type reimbursementOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    request_date?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reimbursementCountOrderByAggregateInput;
    _avg?: reimbursementAvgOrderByAggregateInput;
    _max?: reimbursementMaxOrderByAggregateInput;
    _min?: reimbursementMinOrderByAggregateInput;
    _sum?: reimbursementSumOrderByAggregateInput;
  };

  export type reimbursementScalarWhereWithAggregatesInput = {
    AND?: reimbursementScalarWhereWithAggregatesInput | reimbursementScalarWhereWithAggregatesInput[];
    OR?: reimbursementScalarWhereWithAggregatesInput[];
    NOT?: reimbursementScalarWhereWithAggregatesInput | reimbursementScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'reimbursement'> | string;
    amount?: IntWithAggregatesFilter<'reimbursement'> | number;
    status?: StringWithAggregatesFilter<'reimbursement'> | string;
    request_date?: DateTimeWithAggregatesFilter<'reimbursement'> | Date | string;
    employee_id?: UuidWithAggregatesFilter<'reimbursement'> | string;
    created_at?: DateTimeWithAggregatesFilter<'reimbursement'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'reimbursement'> | Date | string;
  };

  export type sick_leaveWhereInput = {
    AND?: sick_leaveWhereInput | sick_leaveWhereInput[];
    OR?: sick_leaveWhereInput[];
    NOT?: sick_leaveWhereInput | sick_leaveWhereInput[];
    id?: UuidFilter<'sick_leave'> | string;
    start_date?: DateTimeFilter<'sick_leave'> | Date | string;
    end_date?: DateTimeFilter<'sick_leave'> | Date | string;
    status?: StringFilter<'sick_leave'> | string;
    employee_id?: UuidFilter<'sick_leave'> | string;
    created_at?: DateTimeFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type sick_leaveOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type sick_leaveWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: sick_leaveWhereInput | sick_leaveWhereInput[];
      OR?: sick_leaveWhereInput[];
      NOT?: sick_leaveWhereInput | sick_leaveWhereInput[];
      start_date?: DateTimeFilter<'sick_leave'> | Date | string;
      end_date?: DateTimeFilter<'sick_leave'> | Date | string;
      status?: StringFilter<'sick_leave'> | string;
      employee_id?: UuidFilter<'sick_leave'> | string;
      created_at?: DateTimeFilter<'sick_leave'> | Date | string;
      updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type sick_leaveOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: sick_leaveCountOrderByAggregateInput;
    _max?: sick_leaveMaxOrderByAggregateInput;
    _min?: sick_leaveMinOrderByAggregateInput;
  };

  export type sick_leaveScalarWhereWithAggregatesInput = {
    AND?: sick_leaveScalarWhereWithAggregatesInput | sick_leaveScalarWhereWithAggregatesInput[];
    OR?: sick_leaveScalarWhereWithAggregatesInput[];
    NOT?: sick_leaveScalarWhereWithAggregatesInput | sick_leaveScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sick_leave'> | string;
    start_date?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
    status?: StringWithAggregatesFilter<'sick_leave'> | string;
    employee_id?: UuidWithAggregatesFilter<'sick_leave'> | string;
    created_at?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sick_leave'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    employee?: EmployeeListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      employee?: EmployeeListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vacationWhereInput = {
    AND?: vacationWhereInput | vacationWhereInput[];
    OR?: vacationWhereInput[];
    NOT?: vacationWhereInput | vacationWhereInput[];
    id?: UuidFilter<'vacation'> | string;
    start_date?: DateTimeFilter<'vacation'> | Date | string;
    end_date?: DateTimeFilter<'vacation'> | Date | string;
    status?: StringFilter<'vacation'> | string;
    employee_id?: UuidFilter<'vacation'> | string;
    created_at?: DateTimeFilter<'vacation'> | Date | string;
    updated_at?: DateTimeFilter<'vacation'> | Date | string;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type vacationOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByWithRelationInput;
  };

  export type vacationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vacationWhereInput | vacationWhereInput[];
      OR?: vacationWhereInput[];
      NOT?: vacationWhereInput | vacationWhereInput[];
      start_date?: DateTimeFilter<'vacation'> | Date | string;
      end_date?: DateTimeFilter<'vacation'> | Date | string;
      status?: StringFilter<'vacation'> | string;
      employee_id?: UuidFilter<'vacation'> | string;
      created_at?: DateTimeFilter<'vacation'> | Date | string;
      updated_at?: DateTimeFilter<'vacation'> | Date | string;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type vacationOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vacationCountOrderByAggregateInput;
    _max?: vacationMaxOrderByAggregateInput;
    _min?: vacationMinOrderByAggregateInput;
  };

  export type vacationScalarWhereWithAggregatesInput = {
    AND?: vacationScalarWhereWithAggregatesInput | vacationScalarWhereWithAggregatesInput[];
    OR?: vacationScalarWhereWithAggregatesInput[];
    NOT?: vacationScalarWhereWithAggregatesInput | vacationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vacation'> | string;
    start_date?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    status?: StringWithAggregatesFilter<'vacation'> | string;
    employee_id?: UuidWithAggregatesFilter<'vacation'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vacation'> | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    reimbursement?: reimbursementCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reimbursement?: reimbursementUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    reimbursement?: reimbursementUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateManyInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type reimbursementCreateInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutReimbursementInput;
  };

  export type reimbursementUncheckedCreateInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reimbursementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutReimbursementNestedInput;
  };

  export type reimbursementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reimbursementCreateManyInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reimbursementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reimbursementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutSick_leaveInput;
  };

  export type sick_leaveUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutSick_leaveNestedInput;
  };

  export type sick_leaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutVacationInput;
  };

  export type vacationUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutVacationNestedInput;
  };

  export type vacationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ReimbursementListRelationFilter = {
    every?: reimbursementWhereInput;
    some?: reimbursementWhereInput;
    none?: reimbursementWhereInput;
  };

  export type Sick_leaveListRelationFilter = {
    every?: sick_leaveWhereInput;
    some?: sick_leaveWhereInput;
    none?: sick_leaveWhereInput;
  };

  export type VacationListRelationFilter = {
    every?: vacationWhereInput;
    some?: vacationWhereInput;
    none?: vacationWhereInput;
  };

  export type reimbursementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type sick_leaveOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vacationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    hire_date?: SortOrder;
    job_title?: SortOrder;
    salary?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EmployeeRelationFilter = {
    is?: employeeWhereInput;
    isNot?: employeeWhereInput;
  };

  export type reimbursementCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    request_date?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reimbursementAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type reimbursementMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    request_date?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reimbursementMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    request_date?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reimbursementSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type sick_leaveCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sick_leaveMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sick_leaveMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vacationCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vacationMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vacationMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    employee_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEmployeeInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type reimbursementCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>
      | reimbursementCreateWithoutEmployeeInput[]
      | reimbursementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | reimbursementCreateOrConnectWithoutEmployeeInput
      | reimbursementCreateOrConnectWithoutEmployeeInput[];
    createMany?: reimbursementCreateManyEmployeeInputEnvelope;
    connect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
  };

  export type sick_leaveCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
  };

  export type vacationCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
  };

  export type reimbursementUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>
      | reimbursementCreateWithoutEmployeeInput[]
      | reimbursementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | reimbursementCreateOrConnectWithoutEmployeeInput
      | reimbursementCreateOrConnectWithoutEmployeeInput[];
    createMany?: reimbursementCreateManyEmployeeInputEnvelope;
    connect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
  };

  export type sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
  };

  export type vacationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type organizationUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutEmployeeInput;
    upsert?: organizationUpsertWithoutEmployeeInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutEmployeeInput, organizationUpdateWithoutEmployeeInput>,
      organizationUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type reimbursementUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>
      | reimbursementCreateWithoutEmployeeInput[]
      | reimbursementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | reimbursementCreateOrConnectWithoutEmployeeInput
      | reimbursementCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | reimbursementUpsertWithWhereUniqueWithoutEmployeeInput
      | reimbursementUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: reimbursementCreateManyEmployeeInputEnvelope;
    set?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    disconnect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    delete?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    connect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    update?:
      | reimbursementUpdateWithWhereUniqueWithoutEmployeeInput
      | reimbursementUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | reimbursementUpdateManyWithWhereWithoutEmployeeInput
      | reimbursementUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: reimbursementScalarWhereInput | reimbursementScalarWhereInput[];
  };

  export type sick_leaveUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    set?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    disconnect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    delete?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    update?:
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
  };

  export type vacationUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    upsert?: vacationUpsertWithWhereUniqueWithoutEmployeeInput | vacationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    set?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    disconnect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    delete?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    update?: vacationUpdateWithWhereUniqueWithoutEmployeeInput | vacationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: vacationUpdateManyWithWhereWithoutEmployeeInput | vacationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: vacationScalarWhereInput | vacationScalarWhereInput[];
  };

  export type reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>
      | reimbursementCreateWithoutEmployeeInput[]
      | reimbursementUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?:
      | reimbursementCreateOrConnectWithoutEmployeeInput
      | reimbursementCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | reimbursementUpsertWithWhereUniqueWithoutEmployeeInput
      | reimbursementUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: reimbursementCreateManyEmployeeInputEnvelope;
    set?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    disconnect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    delete?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    connect?: reimbursementWhereUniqueInput | reimbursementWhereUniqueInput[];
    update?:
      | reimbursementUpdateWithWhereUniqueWithoutEmployeeInput
      | reimbursementUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | reimbursementUpdateManyWithWhereWithoutEmployeeInput
      | reimbursementUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: reimbursementScalarWhereInput | reimbursementScalarWhereInput[];
  };

  export type sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>
      | sick_leaveCreateWithoutEmployeeInput[]
      | sick_leaveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: sick_leaveCreateOrConnectWithoutEmployeeInput | sick_leaveCreateOrConnectWithoutEmployeeInput[];
    upsert?:
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: sick_leaveCreateManyEmployeeInputEnvelope;
    set?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    disconnect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    delete?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    connect?: sick_leaveWhereUniqueInput | sick_leaveWhereUniqueInput[];
    update?:
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput
      | sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?:
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput
      | sick_leaveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
  };

  export type vacationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>
      | vacationCreateWithoutEmployeeInput[]
      | vacationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: vacationCreateOrConnectWithoutEmployeeInput | vacationCreateOrConnectWithoutEmployeeInput[];
    upsert?: vacationUpsertWithWhereUniqueWithoutEmployeeInput | vacationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: vacationCreateManyEmployeeInputEnvelope;
    set?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    disconnect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    delete?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    connect?: vacationWhereUniqueInput | vacationWhereUniqueInput[];
    update?: vacationUpdateWithWhereUniqueWithoutEmployeeInput | vacationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: vacationUpdateManyWithWhereWithoutEmployeeInput | vacationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: vacationScalarWhereInput | vacationScalarWhereInput[];
  };

  export type employeeCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type employeeUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutOrganizationInput
      | employeeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>
      | employeeCreateWithoutOrganizationInput[]
      | employeeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | employeeCreateOrConnectWithoutOrganizationInput
      | employeeCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput
      | employeeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: employeeCreateManyOrganizationInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?:
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput
      | employeeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | employeeUpdateManyWithWhereWithoutOrganizationInput
      | employeeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeCreateNestedOneWithoutReimbursementInput = {
    create?: XOR<employeeCreateWithoutReimbursementInput, employeeUncheckedCreateWithoutReimbursementInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutReimbursementInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeUpdateOneRequiredWithoutReimbursementNestedInput = {
    create?: XOR<employeeCreateWithoutReimbursementInput, employeeUncheckedCreateWithoutReimbursementInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutReimbursementInput;
    upsert?: employeeUpsertWithoutReimbursementInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutReimbursementInput, employeeUpdateWithoutReimbursementInput>,
      employeeUncheckedUpdateWithoutReimbursementInput
    >;
  };

  export type employeeCreateNestedOneWithoutSick_leaveInput = {
    create?: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSick_leaveInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeUpdateOneRequiredWithoutSick_leaveNestedInput = {
    create?: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSick_leaveInput;
    upsert?: employeeUpsertWithoutSick_leaveInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutSick_leaveInput, employeeUpdateWithoutSick_leaveInput>,
      employeeUncheckedUpdateWithoutSick_leaveInput
    >;
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeCreateNestedOneWithoutVacationInput = {
    create?: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutVacationInput;
    connect?: employeeWhereUniqueInput;
  };

  export type employeeUpdateOneRequiredWithoutVacationNestedInput = {
    create?: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutVacationInput;
    upsert?: employeeUpsertWithoutVacationInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutVacationInput, employeeUpdateWithoutVacationInput>,
      employeeUncheckedUpdateWithoutVacationInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type organizationCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutEmployeeInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type reimbursementCreateWithoutEmployeeInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reimbursementUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reimbursementCreateOrConnectWithoutEmployeeInput = {
    where: reimbursementWhereUniqueInput;
    create: XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>;
  };

  export type reimbursementCreateManyEmployeeInputEnvelope = {
    data: reimbursementCreateManyEmployeeInput | reimbursementCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type sick_leaveCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveCreateOrConnectWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    create: XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>;
  };

  export type sick_leaveCreateManyEmployeeInputEnvelope = {
    data: sick_leaveCreateManyEmployeeInput | sick_leaveCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type vacationCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationCreateOrConnectWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    create: XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>;
  };

  export type vacationCreateManyEmployeeInputEnvelope = {
    data: vacationCreateManyEmployeeInput | vacationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutEmployeeInput = {
    update: XOR<organizationUpdateWithoutEmployeeInput, organizationUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<organizationCreateWithoutEmployeeInput, organizationUncheckedCreateWithoutEmployeeInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutEmployeeInput, organizationUncheckedUpdateWithoutEmployeeInput>;
  };

  export type organizationUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reimbursementUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: reimbursementWhereUniqueInput;
    update: XOR<reimbursementUpdateWithoutEmployeeInput, reimbursementUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<reimbursementCreateWithoutEmployeeInput, reimbursementUncheckedCreateWithoutEmployeeInput>;
  };

  export type reimbursementUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: reimbursementWhereUniqueInput;
    data: XOR<reimbursementUpdateWithoutEmployeeInput, reimbursementUncheckedUpdateWithoutEmployeeInput>;
  };

  export type reimbursementUpdateManyWithWhereWithoutEmployeeInput = {
    where: reimbursementScalarWhereInput;
    data: XOR<reimbursementUpdateManyMutationInput, reimbursementUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type reimbursementScalarWhereInput = {
    AND?: reimbursementScalarWhereInput | reimbursementScalarWhereInput[];
    OR?: reimbursementScalarWhereInput[];
    NOT?: reimbursementScalarWhereInput | reimbursementScalarWhereInput[];
    id?: UuidFilter<'reimbursement'> | string;
    amount?: IntFilter<'reimbursement'> | number;
    status?: StringFilter<'reimbursement'> | string;
    request_date?: DateTimeFilter<'reimbursement'> | Date | string;
    employee_id?: UuidFilter<'reimbursement'> | string;
    created_at?: DateTimeFilter<'reimbursement'> | Date | string;
    updated_at?: DateTimeFilter<'reimbursement'> | Date | string;
  };

  export type sick_leaveUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    update: XOR<sick_leaveUpdateWithoutEmployeeInput, sick_leaveUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<sick_leaveCreateWithoutEmployeeInput, sick_leaveUncheckedCreateWithoutEmployeeInput>;
  };

  export type sick_leaveUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: sick_leaveWhereUniqueInput;
    data: XOR<sick_leaveUpdateWithoutEmployeeInput, sick_leaveUncheckedUpdateWithoutEmployeeInput>;
  };

  export type sick_leaveUpdateManyWithWhereWithoutEmployeeInput = {
    where: sick_leaveScalarWhereInput;
    data: XOR<sick_leaveUpdateManyMutationInput, sick_leaveUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type sick_leaveScalarWhereInput = {
    AND?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
    OR?: sick_leaveScalarWhereInput[];
    NOT?: sick_leaveScalarWhereInput | sick_leaveScalarWhereInput[];
    id?: UuidFilter<'sick_leave'> | string;
    start_date?: DateTimeFilter<'sick_leave'> | Date | string;
    end_date?: DateTimeFilter<'sick_leave'> | Date | string;
    status?: StringFilter<'sick_leave'> | string;
    employee_id?: UuidFilter<'sick_leave'> | string;
    created_at?: DateTimeFilter<'sick_leave'> | Date | string;
    updated_at?: DateTimeFilter<'sick_leave'> | Date | string;
  };

  export type vacationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    update: XOR<vacationUpdateWithoutEmployeeInput, vacationUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<vacationCreateWithoutEmployeeInput, vacationUncheckedCreateWithoutEmployeeInput>;
  };

  export type vacationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: vacationWhereUniqueInput;
    data: XOR<vacationUpdateWithoutEmployeeInput, vacationUncheckedUpdateWithoutEmployeeInput>;
  };

  export type vacationUpdateManyWithWhereWithoutEmployeeInput = {
    where: vacationScalarWhereInput;
    data: XOR<vacationUpdateManyMutationInput, vacationUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type vacationScalarWhereInput = {
    AND?: vacationScalarWhereInput | vacationScalarWhereInput[];
    OR?: vacationScalarWhereInput[];
    NOT?: vacationScalarWhereInput | vacationScalarWhereInput[];
    id?: UuidFilter<'vacation'> | string;
    start_date?: DateTimeFilter<'vacation'> | Date | string;
    end_date?: DateTimeFilter<'vacation'> | Date | string;
    status?: StringFilter<'vacation'> | string;
    employee_id?: UuidFilter<'vacation'> | string;
    created_at?: DateTimeFilter<'vacation'> | Date | string;
    updated_at?: DateTimeFilter<'vacation'> | Date | string;
  };

  export type employeeCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    reimbursement?: reimbursementCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reimbursement?: reimbursementUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>;
  };

  export type employeeCreateManyOrganizationInputEnvelope = {
    data: employeeCreateManyOrganizationInput | employeeCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutOrganizationInput, employeeUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<employeeCreateWithoutOrganizationInput, employeeUncheckedCreateWithoutOrganizationInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutOrganizationInput, employeeUncheckedUpdateWithoutOrganizationInput>;
  };

  export type employeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    job_title?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    user_id?: UuidFilter<'employee'> | string;
    organization_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type employeeCreateWithoutReimbursementInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutReimbursementInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutReimbursementInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutReimbursementInput, employeeUncheckedCreateWithoutReimbursementInput>;
  };

  export type employeeUpsertWithoutReimbursementInput = {
    update: XOR<employeeUpdateWithoutReimbursementInput, employeeUncheckedUpdateWithoutReimbursementInput>;
    create: XOR<employeeCreateWithoutReimbursementInput, employeeUncheckedCreateWithoutReimbursementInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutReimbursementInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutReimbursementInput, employeeUncheckedUpdateWithoutReimbursementInput>;
  };

  export type employeeUpdateWithoutReimbursementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutReimbursementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutSick_leaveInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    reimbursement?: reimbursementCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutSick_leaveInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reimbursement?: reimbursementUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutSick_leaveInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
  };

  export type employeeUpsertWithoutSick_leaveInput = {
    update: XOR<employeeUpdateWithoutSick_leaveInput, employeeUncheckedUpdateWithoutSick_leaveInput>;
    create: XOR<employeeCreateWithoutSick_leaveInput, employeeUncheckedCreateWithoutSick_leaveInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutSick_leaveInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutSick_leaveInput, employeeUncheckedUpdateWithoutSick_leaveInput>;
  };

  export type employeeUpdateWithoutSick_leaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    reimbursement?: reimbursementUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutSick_leaveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    reimbursement?: reimbursementCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reimbursement?: reimbursementUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
    vacation?: vacationUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeCreateWithoutVacationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    reimbursement?: reimbursementCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutVacationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    reimbursement?: reimbursementUncheckedCreateNestedManyWithoutEmployeeInput;
    sick_leave?: sick_leaveUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutVacationInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
  };

  export type employeeUpsertWithoutVacationInput = {
    update: XOR<employeeUpdateWithoutVacationInput, employeeUncheckedUpdateWithoutVacationInput>;
    create: XOR<employeeCreateWithoutVacationInput, employeeUncheckedCreateWithoutVacationInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutVacationInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutVacationInput, employeeUncheckedUpdateWithoutVacationInput>;
  };

  export type employeeUpdateWithoutVacationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    reimbursement?: reimbursementUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutVacationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type reimbursementCreateManyEmployeeInput = {
    id?: string;
    amount: number;
    status: string;
    request_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sick_leaveCreateManyEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vacationCreateManyEmployeeInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reimbursementUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reimbursementUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reimbursementUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sick_leaveUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vacationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyOrganizationInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    reimbursement?: reimbursementUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    hire_date: Date | string;
    job_title: string;
    salary: number;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutEmployeeNestedInput;
    reimbursement?: reimbursementUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    reimbursement?: reimbursementUncheckedUpdateManyWithoutEmployeeNestedInput;
    sick_leave?: sick_leaveUncheckedUpdateManyWithoutEmployeeNestedInput;
    vacation?: vacationUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
   */
  export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reimbursementDefaultArgs instead
   */
  export type reimbursementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reimbursementDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use sick_leaveDefaultArgs instead
   */
  export type sick_leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    sick_leaveDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vacationDefaultArgs instead
   */
  export type vacationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vacationDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
