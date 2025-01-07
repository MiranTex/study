type Optional<T> = {
    [P in keyof T]?: T[P];
};

type ReadyOnly<T> = {
    readonly [P in keyof T as T[P] extends string ? P : never ]: T[P]
} &
{[P in keyof T as T[P] extends string ? never : P]: T[P]};

interface user {name: string, age: number};

export type typeOfUser = Optional<user>