const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('The Cohort Manager should be able to', () => {
  let cm

  beforeEach(() => {
    cm = new CohortManager()
  })

  it('create a new cohort with a name', () => {
    //set up
    const expected = [new Cohort('test')]
    //execute
    cm.createCohort('test')
    //verify
    expect(cm.cohorts).toEqual(expected)
  })

  it('create multiple cohorts', () => {
    //set up
    const expected = [
      new Cohort('test1'),
      new Cohort('test2'),
      new Cohort('test3')
    ]
    //execute
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    //verify
    expect(cm.cohorts).toEqual(expected)
  })

  it('should display an error message if a cohort was already created', () => {
    //set up
    cm.createCohort('test1')
    const expected = 'Cohort already exists'
    //execute
    const res = cm.createCohort('test1')
    //verfiy
    expect(res).toEqual(expected)
  })

  it('find a cohort by name', () => {
    //set up
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    const expected = new Cohort('test2')
    //execute
    const res = cm.searchCohort('test2')
    //verify
    expect(res).toEqual(expected)
  })

  it('return an error message if cohort is not found', () => {
    //set up
    cm.createCohort('test1')
    cm.createCohort('test2')
    cm.createCohort('test3')
    const expected = 'Cohort not found'
    //execute
    const res = cm.searchCohort('test5')
    //verify
    expect(res).toEqual(expected)
  })

  it('create a new Student', () => {
    //set up
    const expected = [new Student(1, 'Max', 'Mustermann')]
    //execute
    cm.newStudent('Max', 'Mustermann')
    //verfiy
    expect(cm.students).toEqual(expected)
  })

  it('should be able to create Multiple students', () => {
    //set up
    const expected = [
      new Student(1, 'Max', 'Mustermann'),
      new Student(2, 'Ryley', 'Suzanne'),
      new Student(3, 'Ziya', 'Blagorodna')
    ]
    //execute
    cm.newStudent('Max', 'Mustermann')
    cm.newStudent('Ryley', 'Suzanne')
    cm.newStudent('Ziya', 'Blagorodna')
    //verify
    console.log(cm.students, expected)
    expect(cm.students).toEqual(expected)
  })
})
