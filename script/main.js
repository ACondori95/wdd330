const requestData = "./data/projects.json";

function displayProject(project) {
  let a = document.createElement('a');
  let li = document.createElement('li');

  a.textContent = `${project.label}`;
  a.setAttribute('href', `${project.url}`);
  li.appendChild(a);

  document.querySelector('#project-list').appendChild(li);
}

getProjectsInfo();

async function getProjectsInfo() {
  console.log('get data');
  const response = await fetch(requestData);
  const project_info = await response.json();
  project_info.forEach(displayProject);
}