export class Usuario {

  constructor(
    public id: number,
    public email:string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ){}
}

export class Page {
  public page!: number;
  public per_page!: number;
  public total!: number;
  public total_pages!: number;
  public data!: Usuario[]
}
