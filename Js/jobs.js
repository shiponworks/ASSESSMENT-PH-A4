// Data Jobs||
const jobs = [
  {
    id: 1,
    companyName: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$130,000 - $175,000',
    status: 'Not Applied',
    description:
      'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
  },
  {
    id: 2,
    companyName: 'SkyNet Solutions',
    position: 'Frontend Engineer',
    location: 'New York, USA',
    jobType: 'Full-time',
    salary: '$110,000 - $150,000',
    status: 'Not Applied',
    description:
      'Develop scalable and high-performance web interfaces using React and modern JavaScript frameworks.',
  },
  {
    id: 3,
    companyName: 'DataBridge Labs',
    position: 'Backend Developer',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$120,000 - $160,000',
    status: 'Not Applied',
    description:
      'Design and maintain RESTful APIs using Node.js and manage databases for enterprise-level applications.',
  },
  {
    id: 4,
    companyName: 'Creative Minds Studio',
    position: 'UI/UX Designer',
    location: 'San Francisco, USA',
    jobType: 'Contract',
    salary: '$90,000 - $120,000',
    status: 'Not Applied',
    description:
      'Design intuitive and visually engaging user interfaces for web and mobile platforms.',
  },
  {
    id: 5,
    companyName: 'CloudSphere Tech',
    position: 'DevOps Engineer',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$125,000 - $165,000',
    status: 'Not Applied',
    description:
      'Implement CI/CD pipelines, manage cloud infrastructure, and ensure system scalability and security.',
  },
  {
    id: 6,
    companyName: 'FinTech Global',
    position: 'Full Stack Developer',
    location: 'London, UK',
    jobType: 'Full-time',
    salary: '$115,000 - $155,000',
    status: 'Not Applied',
    description:
      'Develop secure fintech applications using MERN stack and integrate third-party payment APIs.',
  },
  {
    id: 7,
    companyName: 'NextGen Security',
    position: 'Cyber Security Analyst',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$100,000 - $140,000',
    status: 'Not Applied',
    description:
      'Monitor security threats, conduct vulnerability assessments, and protect enterprise systems.',
  },
  {
    id: 8,
    companyName: 'AI Innovators Inc',
    position: 'Machine Learning Engineer',
    location: 'Toronto, Canada',
    jobType: 'Full-time',
    salary: '$135,000 - $180,000',
    status: 'Not Applied',
    description:
      'Build and deploy machine learning models for real-world AI-driven products.',
  },
];

//All get Elements
const getAllJobsParentCards = document.getElementById('AllJobsCards');
const getInterviewParentCardsElement =
  document.getElementById('AllInterviewCards');
const getRejectedParentCardsElement = document.getElementById(
  'RejectedCardElement',
);

// Total Counts Job
const getTotalCountElement = document.getElementById('totalCounts');
const availableJobsCountsElement = document.getElementById('AllJobs');

// Total Interview Counts Jobs
const getInterviewCountsElement = document.getElementById('interviewCount');

//
const ofCountInterview = document.getElementById('interviewCountNumber');
const ofCountRejected = document.getElementById('rejectedCountNumber');

//
const getRejectedCountsElement = document.getElementById('rejectedCounts');

// get No Jobs Available Section
const getNoJobsAvailable = document.getElementById('noJobsAvailable');
const getNoJobsInterviewAvailable = document.getElementById(
  'noAvailableInterviewJobs',
);
const getNoJobsRejectedAvailable = document.getElementById(
  'rejectedNoJobsAvailable',
);

// all Available Jobs Section Dom Updates
function renderAllAvailableJobs(jobs) {
  getAllJobsParentCards.innerHTML = '';

  // No Jobs Available condition Check
  if (jobs.length === 0) {
    getNoJobsAvailable.classList.remove('hidden');
  } else {
    getNoJobsAvailable.classList.add('hidden');
  }

  // Dom Updates
  for (const job of jobs) {
    const div = document.createElement('div');
    div.classList =
      'bg-white py-8 px-4 rounded-lg space-y-4 border shadow-sm border-gray-200 transition duration-300 hover:-translate-y-1 cursor-pointer';
    div.innerHTML = `
    <!-- Title And Delete btn -->
            <div class="flex justify-between items-center">

              <!-- Title Subtitle -->
              <div class="space-y-1">
                <h2 class="text-hadingColor font-semibold text-2xl">${job?.companyName}</h2>
                <p class="text-grayColor text-sm">${job?.position}</p>
              </div>

              <!-- deletes Buttons -->
              <div>
                <button onclick="deleteJobs(${job?.id})" class="btn rounded-full">
                  <img src="images/icons/Trash.png" alt="icons">
                </button>
              </div>

            </div>

            <!-- Type Job And Salary -->
            <div>
              <ul class="flex items-center gap-4 list-disc list-inside text-grayColor">
                <li class="list-none text-sm">${job?.location}</li>
                <li class="marker:text-grayColor text-sm">${job?.jobType}</li>
                <li class="marker:text-grayColor text-sm">${job?.salary}</li>
              </ul>
            </div>

            <!-- NOT APPLIED BTN -->
            <div>
              <button class="btn bg-[#EEF4FF] text-hadingColor uppercase outline-none border-none">${job?.status}</button>
            </div>

            <!-- Description -->
            <div>
              <p class="text-grayColor text-sm">${job?.description}</p>
            </div>

            <!-- 2 buttons interview and Rejected -->
            <div class="flex gap-4">
             <button onclick="updateJobStatus(${job?.id}, 'Interview')" class="btn btn-outline btn-success">interview</button>
             <button onclick="updateJobStatus(${job?.id}, 'Rejected')" class="btn btn-outline btn-error">Rejected</button>
            </div>
    `;

    getAllJobsParentCards.appendChild(div);
  }

  // Total And AvailAble Jobs Counts Updates
  getTotalCountElement.innerText = jobs.length;
  availableJobsCountsElement.innerText = jobs.length;
}

// Deletes Cards
function deleteJobs(id) {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
  }
  // Dom Re-Render
  renderAllAvailableJobs(jobs);
  renderInterviewJobs();
  renderRejectedJobs();
}

// interviewJobs filter
function renderInterviewJobs() {
  const interviewJobsFilter = jobs.filter(job => job.status === 'Interview');
  getInterviewParentCardsElement.innerHTML = '';

  // No Jobs Available condition Check
  if (interviewJobsFilter.length === 0) {
    getNoJobsInterviewAvailable.classList.remove('hidden');
  } else {
    getNoJobsInterviewAvailable.classList.add('hidden');
  }

  for (const interviewJob of interviewJobsFilter) {
    const div = document.createElement('div');
    div.classList =
      'bg-white py-8 px-4 rounded-lg space-y-4 border shadow-sm border-gray-200 transition duration-300 hover:-translate-y-1 cursor-pointer';

    div.innerHTML = `
  
       <!-- Title And Delete btn -->
            <div class="flex justify-between items-center">

              <!-- Title Subtitle -->
              <div class="space-y-1">
                <h2 class="text-hadingColor font-semibold text-2xl">${interviewJob?.companyName}</h2>
                <p class="text-grayColor text-sm">${interviewJob?.position}</p>
              </div>

              <!-- deletes Buttons -->
              <div>
                <button onclick="deleteJobs(${interviewJob?.id})" class="btn rounded-full">
                  <img src="images/icons/Trash.png" alt="icons">
                </button>
              </div>

            </div>

            <!-- Type Job And Salary -->
            <div>
              <ul class="flex items-center gap-4 list-disc list-inside text-grayColor">
                <li class="list-none text-sm">${interviewJob?.location}</li>
                <li class="marker:text-grayColor text-sm">${interviewJob?.jobType}</li>
                <li class="marker:text-grayColor text-sm">${interviewJob?.salary}</li>
              </ul>
            </div>

            <!-- NOT APPLIED BTN -->
            <div>
              <button class="btn bg-[#EEF4FF] text-hadingColor uppercase outline-none border-none">${interviewJob?.status}</button>
            </div>

            <!-- Description -->
            <div>
              <p class="text-grayColor text-sm">${interviewJob?.description}</p>
            </div>

            <!-- 2 buttons interview and Rejected -->
            <div class="flex gap-4">
              <button onclick="updateJobStatus(${interviewJob?.id}, 'Interview')" class="btn btn-outline btn-success">interview</button>
              <button onclick="updateJobStatus(${interviewJob?.id}, 'Rejected')" class="btn btn-outline btn-error">Rejected</button>
            </div>
  `;

    getInterviewParentCardsElement.appendChild(div);
  }
  getInterviewCountsElement.innerText = interviewJobsFilter.length;
  ofCountInterview.innerText = interviewJobsFilter.length;
}

// Rejected filter
function renderRejectedJobs() {
  const rejectedJobs = jobs.filter(job => job.status === 'Rejected');
  getRejectedParentCardsElement.innerHTML = '';

  // Check On Jobs AvailAble
  if (rejectedJobs.length === 0) {
    getNoJobsRejectedAvailable.classList.remove('hidden');
  } else {
    getNoJobsRejectedAvailable.classList.add('hidden');
  }

  for (const rejectedJob of rejectedJobs) {
    const div = document.createElement('div');
    div.classList =
      'bg-white py-8 px-4 rounded-lg space-y-4 border shadow-sm border-gray-200 transition duration-300 hover:-translate-y-1 cursor-pointer';

    div.innerHTML = `
    
    <!-- Title And Delete btn -->
            <div class="flex justify-between items-center">

              <!-- Title Subtitle -->
              <div class="space-y-1">
                <h2 class="text-hadingColor font-semibold text-2xl">${rejectedJob?.companyName}</h2>
                <p class="text-grayColor text-sm">${rejectedJob?.position}</p>
              </div>

              <!-- deletes Buttons -->
              <div>
                <button onclick="deleteJobs(${rejectedJob?.id})" class="btn rounded-full">
                  <img src="images/icons/Trash.png" alt="icons">
                </button>
              </div>

            </div>

            <!-- Type Job And Salary -->
            <div>
              <ul class="flex items-center gap-4 list-disc list-inside text-grayColor">
                <li class="list-none text-sm">${rejectedJob?.location}</li>
                <li class="marker:text-grayColor text-sm">${rejectedJob?.jobType}</li>
                <li class="marker:text-grayColor text-sm">${rejectedJob?.salary}</li>
              </ul>
            </div>

            <!-- NOT APPLIED BTN -->
            <div>
              <button class="btn bg-[#EEF4FF] text-hadingColor uppercase outline-none border-none">${rejectedJob?.status}</button>
            </div>

            <!-- Description -->
            <div>
              <p class="text-grayColor text-sm">${rejectedJob?.description}</p>
            </div>

            <!-- 2 buttons interview and Rejected -->
            <div class="flex gap-4">
              <button onclick="updateJobStatus(${rejectedJob?.id}, 'Interview')" class="btn btn-outline btn-success">interview</button>
             <button onclick="updateJobStatus(${rejectedJob?.id}, 'Rejected')" class="btn btn-outline btn-error">Rejected</button>
            </div>

    `;
    getRejectedParentCardsElement.appendChild(div);
  }
  getRejectedCountsElement.innerText = rejectedJobs.length;
  ofCountRejected.innerText = rejectedJobs.length;
}

//  button Click Render
function updateJobStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  if (job) {
    job.status = status;
  }
  renderAllAvailableJobs(jobs);
  renderInterviewJobs();
  renderRejectedJobs();
}

// Render All Function
function renderAll() {
  renderAllAvailableJobs(jobs);
  renderInterviewJobs();
  renderRejectedJobs();
}

renderAll();
