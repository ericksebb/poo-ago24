interface Students {
  [key: number]: string[];
}

export class GradeSchool {
  private students: Students;

  constructor() {
    this.students = {};
  }

  roster(): Students {
    let newRoster: Students = {};
    for (const [grade, names] of Object.entries(this.students)) {
      newRoster[parseInt(grade)] = names.slice();
    }

    return newRoster;
  }

  add(name: string, grade: number) {
    this.removeStudent(name);

    this.students[grade] = this.students[grade] || [];
    this.students[grade].push(name);
    this.students[grade].sort();
  }

  removeStudent(name: string) {
    for (const grade in this.students) {
      if (this.students[grade].includes(name)) {
        this.students[grade].splice(this.students[grade].indexOf(name));
      }
    }
  }

  grade(grade: number): string[] {
    return (this.students[grade] || []).slice();
  }
}
