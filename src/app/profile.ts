export class Profile {
  public name: string;
  public skills: Array<string>;
  public roles: Array<string>;
  public experience: Array<string>;

  constructor(name: string, skills: Array<string>, roles: Array<string>, experience: Array<string> ){
    this.name = name;
    this.skills = skills;
    this.roles = roles;
    this.experience = experience;
  }
}
