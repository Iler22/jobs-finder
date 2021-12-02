import { jobs, totalResults } from './jobsSearch.js';

const jobList = document.querySelector('.jobs > ul');
const numberJobs = document.querySelector('.number-jobs');

function renderNumberJobs() {
  numberJobs.innerHTML = `${totalResults} matching jobs found`;
}

function renderJobsSearchData() {
  jobList.innerHTML = `${jobs
    .map((job) => {
      return `<li class="card mb-5">
                <article class="card-content content">
                  <h3 class="title mb-4">${job.title}</h3>
                  <p>${job.employer}</p>
                  <p>${job.location}</p>
                  <p>${job.salaryRange}</p>
                  <p>${job.description}</p>
                  <button class="button">Favourite<i class="far fa-heart ml-2"></i></button>
                </article>
              </li>`;
    })
    .join('')}`;
}

renderNumberJobs();
renderJobsSearchData();
