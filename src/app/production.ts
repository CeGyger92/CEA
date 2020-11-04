export class Production {
  create(event: { name: string; date: string; desc:string;  imgPath:string;}) {
    return { name: event.name, date:event.date, desc:event.desc, imgPath: event.imgPath };
  }
}
