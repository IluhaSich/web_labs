class Student {
    constructor(name, gender, birthYear) {
      this.name = name;
      this.gender = gender;
      this.birthYear = Number(birthYear);
    }
  
    getAge(currentYear = new Date().getFullYear()) {
      return currentYear - this.birthYear;
    }
  
    getDescription() {
      return `{${this.name}, ${this.getAge()}}`;
    }
  }
  
  function filterStudents(data, gender) {
    const validFilters = ['boys', 'girls'];
    if (!validFilters.includes(gender.toLowerCase())) {
      console.log('ERROR');
      return;
    }
  
    const genderMap = {
      boys: 'boy',
      girls: 'girl'
    };
  
    const students = data.map(entry => {
      const [name, gender, year] = entry.trim().split(' ');
      return new Student(name, gender, year);
    });
  
    const filtered = students.filter(s => s.gender === genderMap[gender.toLowerCase()]);
    
    filtered.forEach(student => {
      console.log(student.getDescription());
    });
  }

  filterStudents(
    ['Anna girl 2010', 'Bob boy 2011', 'Candy girl 2012'],
    'boys'
  );
  console.log();

  filterStudents(
    ['Anna girl 2010', 'Bob boy 2011', 'Candy girl 2012'],
    'girls'
  );
  console.log();

  filterStudents(
    ['Anna girl 2010', 'Bob boy 2011', 'Candy girl 2012'],
    'helicopter'
  );  