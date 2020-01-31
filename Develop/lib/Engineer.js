const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return Engineer;
  }
}

const engineerCard = (engineerData, i) => {
  return `<!-- CARD MAIN ELEMENT -->
  <div
    class="card text-left shadow p-3 mb-5 bg-light rounded"
    style="width: 325px;"
  >
    <div
      class="card-header rounded bg-warning"
      style="color: white; font-weight: bolder; font-size: 1.5em;"
    >
      <i class="fa fa-user"></i>
      Name
      <br />
      <i class="fa fa-briefcase"></i>
      Engineer
    </div>
    <!-- CARD BODY -->
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:</li>
        <li class="list-group-item">Email:</li>
        <li class="list-group-item">Github:</li>
      </ul>
    </div>
  </div>`;
};

module.exports = {engineerCard: engineerCard, Engineer: Engineer};
