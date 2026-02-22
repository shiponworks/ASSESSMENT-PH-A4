const getButton = document.querySelectorAll('.btn');
const getAllSection = document.querySelectorAll('.sections');

// All Section
// const allSection = document.querySelectorAll('.sections');

function toggleStyle(id) {
  getButton.forEach(btn => {
    btn.classList.remove('bg-primaryColor', 'text-white');
    btn.classList.add('text-black');
  });

  // active Button
  const active = document.getElementById(id);
  active.classList.remove('text-black');
  active.classList.add('bg-primaryColor', 'text-white');

  // Hidden All Section
  getAllSection.forEach(section => {
    section.classList.add('hidden');
  });

  // Show Section
  if (id === 'allAvailableJobButton') {
    document.getElementById('allSection').classList.remove('hidden');
  } else if (id === 'interviewAvailableButton') {
    document.getElementById('interviewSection').classList.remove('hidden');
  } else if (id === 'rejectedAvailableJobs') {
    document.getElementById('rejectedSection').classList.remove('hidden');
  }
}
