
export interface IWrite<T> {
  // create: (item: T, callback: (error: any, result: any) => Promise<void>) => Promise<void>;
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(id: string): Promise<T>;
}

export interface ICRUD<T> {
  getAll(): Promise<T[]>;
  get(id: string): Promise<T>;
  update(entity: T,id:string): Promise<T>;
  create(entity: T): Promise<boolean>;
  delete(id: string): Promise<void>;
}


